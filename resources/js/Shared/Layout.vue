<template>
    <div class="min-h-screen bg-gray-100">
        <Navigation />

        <!-- Page Heading -->
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <slot name='header'></slot>
            </div>
        </header>

        <main>
            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6 bg-white border-b border-gray-200">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

</template>

<script setup>
import Navigation from './Navigation.vue';
</script>
