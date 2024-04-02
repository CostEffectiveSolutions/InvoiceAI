<template>
    <div class="max-w-4xl mx-auto flex mt-10">
        <div class="flex-1">
            <div class="text-4xl">
                Comments
            </div>
            <div>
                <label for="comment" class="block text-sm font-medium leading-6 text-gray-900 sr-only">Type your
                    question</label>

                <div class="mt-2 mb-2">
                    <input rows="2" type="text" placeholder="Type your question" name="comment" id="comment"
                        v-model="newComment" @keyup.enter="sendComment"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>

                <div class="text-end mb-6">
                    <button type="button" @click="sendComment"
                        class="rounded-md bg-black px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Send</button>
                </div>
                <TransitionGroup name="slide-fadeup">
                    <div v-for="comment in comments" :key="comment.created"
                        class="mb-3 border-2 border-black/30 rounded-lg p-3">
                        <div class="flex items-center justify-between">
                            <div class="text-sm font-semibold text-gray-400">
                                {{ comment.author == '' ? 'Anonymous' : comment.author }}
                            </div>
                            <div class="text-sm text-gray-400">
                                {{ calculateMinutesAgo(comment.created) }} min ago
                            </div>
                        </div>
                        <div class="flex justify-between items-center mt-2">
                            <div class="text first-letter:capitalize">{{ comment.message }}</div>
                            <button class="border-2 border-gray-400/30 rounded-lg p-1 pb-0 pt-0.5 flex gap-x-1"  @click="updateVotes(comment)">
                                <div class="text-gray-700">
                                    {{ comment.votes }}
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </TransitionGroup>

                <div v-if="!comments.length" class="text-center text-gray-600">
                    <p>
                        There are no questions asked yet.
                    </p>
                    <p>
                        Ask the first one!
                    </p>
                </div>
            </div>
        </div>
        <div class="flex-1 text-center text-4xl">
            Pools
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const route = useRoute()

const newComment = ref('')

const { data, error } = await supabase
    .from('event')
    .select('*')
    .eq('name', route.params.code)
    const comments = ref([])
if (data[0]) {
    comments.value = data[0].comments || []
}

const currentChannel = supabase.channel(route.params.code, {
    config: {
        broadcast: { self: true },
    },
})

currentChannel.on('broadcast', { event: 'test' }, ({ payload }) => {
    comments.value.unshift(payload)
})

async function sendComment() {
    currentChannel.send({
        type: 'broadcast',
        event: 'test',
        payload: { message: newComment.value, author: '', votes: 0, archived: false, created: Date.now() }
    })

    updateComments()
    newComment.value = ''
}

async function updateComments() {
    await supabase
        .from('event')
        .update({ comments: [{ message: newComment.value, author: '', votes: 0, archived: false, created: Date.now() }, ...comments.value] })
        .eq('name', route.params.code)
}

onMounted(async () => {
    setInterval(async () => {
        const { data, error } = await supabase
            .from('event')
            .select('*')
            .eq('name', route.params.code)

        comments.value = data[0].comments || []
    }, 60000);
})

function calculateMinutesAgo(commentEpoch) {
    const currentTime = Date.now(); // Current time in epoch seconds
    const differenceInSeconds = currentTime - commentEpoch;
    const differenceInMinutes = Math.floor(differenceInSeconds / 1000 / 60);
    return differenceInMinutes;
}

function updateVotes(comment) {
    comment.votes += 1
    updateComments()
}

currentChannel.subscribe((status) => {
    // Wait for successful connection
    if (status !== 'SUBSCRIBED') {
        return null
    }
})
</script>