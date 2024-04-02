<template>

    <div class="relative isolate px-6 pt-8 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-2xl">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-loose">Join event</h1>
                <div class="max-w-[250px] text-start mx-auto flex gap-x-3 mt-2">
                    <div class="flex rounded-md shadow-sm">
                        <span
                            class="inline-flex items-center rounded-l-md pb-1 border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm bg-white">@</span>
                        <input type="text" name="company-website" id="company-website" v-model="eventCodeJoin"
                        @keydown.enter="navigateTo('/' + eventCodeJoin)"
                            class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Event Code" />
                    </div>
                    <NuxtLink :to="'/' + eventCodeJoin"
                        class="rounded-md bg-black px-3 py-1.5 self-center text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Join</NuxtLink>
                </div>
                <div class="mt-4 flex items-center justify-center gap-x-6">
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-2xl py-32">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-loose">
                    <span class="text-indigo-600">$20</span> per event <br /> <span class="text-indigo-600">1000+</span> users <br /> <span class="text-indigo-600">∞</span> comments <br /><span class="text-indigo-600">∞</span> polls </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">Create event to test it out </p>
                <div class="max-w-[150px] text-start mx-auto">
                    <!-- <label for="company-website" class="block text-sm font-medium leading-6 text-gray-900">Company
                        Website</label> -->
                    <div class="mt-2 flex rounded-md shadow-sm">
                        <span
                            class="inline-flex items-center rounded-l-md  pb-1 border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">@</span>
                        <input type="text" name="company-website" id="company-website" v-model="eventCode"
                            class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Event Code" />
                    </div>
                </div>
                <div class="mt-4 flex items-center justify-center gap-x-6">
                    <div @click="createEvent"
                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Create</div>
                </div>
            </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
            aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div v-if="events.length" class="mt-8 flow-root max-w-lg mx-auto">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Code
                                </th>
                                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    <span class="sr-only">Open</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="event in events" :key="event.code">
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    {{ event.name }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">@{{ event.code }}</td>
                                <td
                                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <a :href="'/' + event.code" class="text-indigo-600 hover:text-indigo-900">Open<span
                                            class="sr-only">, {{ event.code }}</span></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const user = useSupabaseUser()
console.log(user)
const supabase = useSupabaseClient()
const eventCodeJoin = ref('')
const eventCode = ref('')
const events = ref([])

if (user.value) {
    // Redirect to protected page
    getEvents()
    console.log('get events')
}

async function createEvent() {
    const { data, error } = await supabase
        .from('event')
        .insert([
            { code: eventCode.value, name: eventCode.value, user_id: user.value.id },
        ])
        .select()

    getEvents()
}

async function getEvents() {
    console.log('getting')
    let { data, error } = await supabase
        .from('event')
        .select('*')
        .eq('user_id', user.value.id)
        .order('id', { ascending: false })

    console.log(data)
    console.log('1123')
    events.value = data
}

useHead({
    title: 'bli.do - Better slido',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
})
</script>
<style></style>