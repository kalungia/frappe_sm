<template>
    <div class="w-full h-full flex flex-col py-2xl bg-white border-r border-gray-200">
        <div class="relative mb-12 px-xl">
            <router-link :to="{ name: 'Dashboard' }">
                <Logo class="h-12"/>
            </router-link>
        </div>

        <div class="flex px-xl">
            <DarkButtonLink :url="'Dashboard'" class="w-full">
                <PlusIcon class="mr-xs"/>
                Create post
            </DarkButtonLink>
        </div>

        <div class="flex flex-col space-y-lg overflow-y-auto px-xl mt-2xl h-full">
            <MenuGroupBody>
                <MenuItem :url="'Dashboard'" :active="route.name === 'Dashboard'">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                        </svg>
                    </template>
                    Dashboard
                </MenuItem>
            </MenuGroupBody>
            <MenuDelimiter/>
            <MenuGroupHeader :create-url="'Dashboard'" class="mt-lg">
                Content
                <template #icon>
                    <PlusIcon/>
                </template>
            </MenuGroupHeader>
            <MenuGroupBody>
                <MenuItem :url="'Dashboard'"
                          :active="route.name === 'Posts/Index'">
                    <template #icon>
                        <GridIcon/>
                    </template>
                    Posts
                </MenuItem>
                <MenuItem :url="'Dashboard'" :active="route.name === 'Calendar'">
                    <template #icon>
                        <CalendarIcon/>
                    </template>
                    Calendar
                </MenuItem>
                <MenuItem :url="'Dashboard'" :active="route.name === 'Media'">
                    <template #icon>
                        <PhotoIcon/>
                    </template>
                    Media Library
                </MenuItem>
            </MenuGroupBody>
            <MenuDelimiter/>
            <MenuGroupHeader :create-url="'Dashboard'">
                Configuration
            </MenuGroupHeader>
            <MenuGroupBody>
                <MenuItem :url="'Dashboard'" :active="route.name === 'Accounts/Accounts'">
                    <template #icon>
                        <ShareIcon/>
                    </template>
                    Social Accounts
                </MenuItem>
                <MenuItem :url="'Dashboard'" :active="route.name === 'Services'">
                    <template #icon>
                        <ServerStackIcon/>
                    </template>
                    Services
                </MenuItem>
                <MenuItem :url="'Dashboard'" :active="route.name === 'Settings'">
                    <template #icon>
                        <CogIcon/>
                    </template>
                    Settings
                </MenuItem>
            </MenuGroupBody>
            <MenuDelimiter/>
            <MenuGroupHeader>
                System
            </MenuGroupHeader>
            <MenuGroupBody>
                <MenuItem :url="'Dashboard'" :active="route.name === 'System/Status'">
                    <template #icon>
                        <InformationCircle/>
                    </template>
                    Status
                </MenuItem>
                <MenuItem :url="'Dashboard'" :active="route.name === 'System/Logs'">
                    <template #icon>
                        <Document/>
                    </template>
                    Logs
                </MenuItem>
            </MenuGroupBody>
        </div>

        <div class="px-xl pt-md mb-[3.0rem]">
            <UserMenu/>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import Logo from "@/Components/DataDisplay/Logo.vue"
import MenuItem from "@/Components/Sidebar/MenuItem.vue"
import MenuDelimiter from "@/Components/Sidebar/MenuDelimiter.vue"
import MenuGroupHeader from "@/Components/Sidebar/MenuGroupHeader.vue"
import MenuGroupBody from "@/Components/Sidebar/MenuGroupBody.vue"
import DarkButtonLink from "@/Components/Button/DarkButtonLink.vue"
import PlusIcon from "@/Icons/Plus.vue"
import GridIcon from "@/Icons/Grid.vue"
import CalendarIcon from "@/Icons/Calendar.vue"
import PhotoIcon from "@/Icons/Photo.vue"
import ShareIcon from "@/Icons/Share.vue"
import CogIcon from "@/Icons/Cog.vue"
import ServerStackIcon from "@/Icons/ServerStack.vue"
import UserMenu from "../Navigation/UserMenu.vue";
import QueueList from "../../Icons/QueueList.vue";
import InformationCircle from "../../Icons/InformationCircle.vue";
import Document from "../../Icons/Document.vue";

const route = useRoute();
</script>
