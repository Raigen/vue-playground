<template>
  <div class="flex min-h-dvh flex-col">
    <LayoutAppHeader />
    <main class="mx-auto w-full max-w-4xl flex-1 px-4 sm:px-6">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
