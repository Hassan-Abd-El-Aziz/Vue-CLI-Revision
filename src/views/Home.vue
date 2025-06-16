<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div style="display: flex; justify-content: space-between">
    <h1>Home</h1>
    <h2>Hassan</h2>
    <h1>parent page</h1>
  </div>

  <div style="display: flex; justify-content: center; gap: 15">
    <ul
      style="display: flex; justify-content: center; gap: 20; list-style: none"
    >
      <li>
        <router-link :to="{ name: 'prfile' }">Page 1</router-link>
      </li>
    </ul>
    <ul
      style="display: flex; justify-content: center; gap: 20; list-style: none"
    >
      <li>
        <router-link :to="{ name: 'two' }">Page 2</router-link>
      </li>
    </ul>
  </div>
  <hr />
  <div>
    <router-view />
  </div>
</template>
