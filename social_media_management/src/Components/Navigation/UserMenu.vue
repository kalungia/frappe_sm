<template>
    <Dropdown width-classes="w-64" placement="top-start">
        <template #trigger>
            <div role="button" class="w-full flex items-center">
                <div class="mr-sm">
                    <UserCircle class="!w-9 !h-9 text-gray-400"/>
                </div>
                <div class="w-[calc(100%-3rem)]">
                    <div class="truncate">{{ session.user }}</div>
                </div>
            </div>
        </template>

        <template #content>
            <DropdownItem :url="'Dashboard'">
                <template #icon>
                    <PencilSquare/>
                </template>
                Edit profile
            </DropdownItem>

            <button @click="session.logout.submit()" type="button" class="bg-primary-50 flex items-center text-left w-full first:rounded-t-md last:rounded-b-md text-gray-800 transition ease-in-out duration-200 hover:bg-gray-100">
                <span class="mr-xs rtl:mr-0 rtl:ml-xs">
                    <ArrowRightOnRectangleIcon/>
                </span>
                Sign Out
            </button>

        </template>
    </Dropdown>
</template>

<script setup>
import {ref} from "vue";
import { session } from '../../data/session';
import Dropdown from "@/Components/Dropdown/Dropdown.vue";
import DropdownItem from "@/Components/Dropdown/DropdownItem.vue";
import ArrowRightOnRectangleIcon from "@/Icons/ArrowRightOnRectangle.vue";
import UserCircle from "../../Icons/UserCircle.vue";
import PencilSquare from "../../Icons/PencilSquare.vue";

const open = ref(false);
</script>