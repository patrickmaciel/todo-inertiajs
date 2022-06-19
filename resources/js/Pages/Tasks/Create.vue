<template>
    <BaseLayout>

        <Head title="Log in" />
        <template #header>Header</template>

        <h1>
            New Task
            <Link class='text-blue-500 underline' href="/tasks">Back to list</Link>
        </h1>

        <div>
            <div class="tasks flex flex-col space-y-4">
                <form @submit.prevent="submit" class='flex flex-col items-start gap-4' enctype="multipart/form-data">

                    <label for="name">
                        <input type="text" name='name' v-model="form.name" placeholder="your name">
                        <ValidationError :hasError="form.errors.name" />
                    </label>

                    <label for="filepath">
                        <input type="file" name='filepath' placeholder="your filepath">
                        <ValidationError :hasError="form.errors.filepath" />
                    </label>

                    <label for="remember_at">
                        <input type="date" name='remember_at' v-model="form.remember_at" placeholder="your remember_at">
                        <ValidationError :hasError="form.errors.remember_at" />
                    </label>

                    <label for="finished">
                        <input type="checkbox" name='finished' v-model="form.finished" value="1" placeholder="your finished">Finished
                        <ValidationError :hasError="form.errors.finished" />
                    </label>

                    <label for="cost">
                        <input class='mask-money' type="text" name='cost' v-model="form.cost" placeholder="your cost">
                        <ValidationError :hasError="form.errors.cost" />
                    </label>

                    <button class='p-2 border-gray-300 border-2' type="submit">Save</button>
                </form>
            </div>
        </div>
    </BaseLayout>
</template>

<script>
</script>

<script setup>
import { ref, watch, onMounted } from 'vue';
import debounce from 'lodash/debounce';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-vue3';
import ValidationError from '@/Shared/ValidationError';

let props = defineProps({
});

let form = useForm({
    name: '',
    filepath: '',
    remember_at: '',
    finished: false,
    cost: '',
    // method: 'POST',
    // action: '/tasks/store',
    // data: {
    //     name: '',
    //     filepath: '',
    //     remember_at: '',
    //     finished: false,
    //     cost: '',
    // },
});

let submit = () => {
    form.post('/tasks');
}
</script>
