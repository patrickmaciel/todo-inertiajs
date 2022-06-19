<template>
    <BaseLayout>

        <Head title="Log in" />
        <template #header>Header</template>

        <h1>
            All tasks
            <Link class='text-blue-500 underline' href="/tasks/create">Create new</Link>
        </h1>

        <div>
            <div class="tasks flex flex-col space-y-4">
                <div class="search">
                    <form action="{{ route('tasks.index') }}" method='GET' class='flex flex-col'>
                        <input v-model="search" type="text" name='search'
                            placeholder='Type what you need to search here'>
                    </form>
                </div>

                <div class="task-cards flex flex-wrap gap-2">
                    <div v-for="task in tasks.data" :key="`task-${task.id}`" class="task border-2 p-2 rounded-md">
                        <div>
                            <strong>{{ task.name }}</strong>&nbsp;<br>

                            <Link class='text-green-500 underline cursor-pointer' :href="`/tasks/${task.id}`">
                            SHOW
                            </Link>&nbsp;

                            <Link class='text-blue-500 underline cursor-pointer' :href="`/tasks/${task.id}/edit`">
                            EDIT
                            </Link>&nbsp;

                            <Link class='text-red-500 underline cursor-pointer' :href="`/tasks/${task.id}`" as="button"
                                method="DELETE">
                            DELETE
                            </Link>
                        </div>
                        <p>
                            <!-- @if (!empty(task.filepath))
                                @if (isImage(task.file_extension))
                                <strong>IMG: </strong>
                                <img src="{{ asset(task.filepath) }}" width='80px' alt="{{ task.name }}">
                                @else
                                <strong>FILE: </strong><a class='text-blue-500 underline cursor-pointer'
                                    href="{{ asset(task.filepath) }}">{{ task.filename }}</a>
                                @endif
                                <br>
                            @endif -->
                            {{ task.filepath }} |
                            {{ task.file_extension }}
                        </p>
                        <p><em>{{ task.finished }}</em> | {{ task.remember_at }}</p>
                        <p>{{ task.cost }}</p>
                    </div>
                </div>
            </div>

            <div class="pagination">
                <Pagination :links="tasks.links" class="mt-6" />
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
import Pagination from '@/Shared/Pagination';

let props = defineProps({
    filters: Object,
    tasks: Object
});

let search = ref(props.filters.search);
watch(
    search,
    debounce(function (value) {
        console.log('debounce ' + value);
        Inertia.get(
            '/tasks',
            {
                search: value
            },
            {
                preserveState: true,
                replace: true
            }
        );
    }, 500)
);
</script>
