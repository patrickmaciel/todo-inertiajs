<template>
    <BaseLayout>

        <Head title="Log in" />
        <template #header>Header</template>

        <h1>
            Show task #{{ task.id }}
            <Link class='text-blue-500 underline' href="/tasks">Back to list</Link>
        </h1>

        <ul>
            <li><strong>Id:</strong> {{ task.id }}</li>
            <li><strong>User:</strong> {{ task.user.name }}</li>
            <li><strong>Name:</strong> {{ task.name }}</li>
            <li><strong>Filepath:</strong> {{ task.filepath }} {{ task.file_extension }}</li>
            <li><strong>Remember_at:</strong> {{ task.remember_at }}</li>
            <li><strong>Finished:</strong> {{ task.finished }}</li>
            <li><strong>Cost:</strong> {{ task.cost }}</li>
        </ul>
    </BaseLayout>
</template>

<script>
</script>

<script setup>
let props = defineProps({
    task: Object
});
</script>
