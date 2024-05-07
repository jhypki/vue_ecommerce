<template >
    <div class='w-full min-h-16 bg-background border-b flex items-center justify-between px-4'>
        <Branding/>
        <Button>button</Button>
        <ToggleThemeButton />
    </div>
</template>


<script setup lang="ts">
import { Button } from '@/components/ui/button'
import ToggleThemeButton from './ToggleThemeButton.vue'
import Branding from './Branding.vue'
</script>
<style lang="">
    
</style>