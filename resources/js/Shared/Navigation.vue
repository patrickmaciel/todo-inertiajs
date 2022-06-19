<template>
    <nav class="bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <Link href="{{ route('dashboard') }}">
                            Logo
                        </Link>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex items-center">
                        <Navlink href="/" :active="$page.component == 'Welcome'">Home</Navlink>
                        <Navlink href="/dashboard" :active="$page.component == 'Dashboard'">Dashboard</Navlink>
                        <Navlink href="/tasks" :active="$page.component == 'Tasks/Index'">Tasks</Navlink>
                        <Navlink href="/logout" method="post" as="button">Log Out</Navlink>
                    </div>
                        <!--
                <li><Link class='text-blue-500 hover:underline' :class="{ 'font-bold underline': $page.url.startsWith('/users') }" href="/users">Users</Link></li>

                <li><Link class='text-blue-500 hover:underline' :class="{ 'font-bold underline': $page.component == 'Settings' }" href="/settings">Settings</Link></li>

                <li><Link class='text-blue-500 hover:underline' :class="{ 'font-bold underline': $page.url == '/logout' }" href="/logout" method='post' :data="{ foo: 'bar'}" as='button'>Log Out</Link></li>
                        -->
                    </div>
                </div>
            </div>
    </nav>
</template>

<script setup>
import Navlink from './Navlink';
</script>
