<template>
  <div class="page index">
    <div class="container">
      <h1 class="mb-5 title">
        Licencje
      </h1>

      <h2>Używamy następujących licencji:</h2>
      <ol>
        <li>
          Pliki JS -> <a 
            ref="noreferrer nofollow"
            href="https://www.webo.agency/static/LICENSES"
            rel="noopener noreferrer"
            target="_blank"
          >LICENCJE</a>
        </li>
        <li>
          /*!
          * Bootstrap v4.1.3 (https://getbootstrap.com/)
          * Copyright 2011-2018 The Bootstrap Authors
          * Copyright 2011-2018 Twitter, Inc.
          * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
          */
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `webo - Welcome in home of innovation`,
      meta: [
        {
          name: "description",
          content: "We are webo - interdisciplinary agency opened for you needs"
        }
      ]
    };
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  margin: 25vh auto;
}
</style>

<style>
.page h2 {
  margin-bottom: 15px;
}

.page li {
  margin-bottom: 5px;
}

.page ol {
  margin-bottom: 25px;
}

.page ol ol {
  list-style: square;
}
</style>
