<template>
     <ul class="catalog__pagination pagination">
      <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow pagination__link--disabled"
            @click.prevent="prePage"
             aria-label="Предыдущая страница">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
        </a>
      </li>
      <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
            <a class="pagination__link" :class="{'pagination__link--current':pageNumber === page}"
             @click.prevent="paginate(pageNumber)">
              {{ pageNumber }}
            </a>
      </li>
      <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow"
       @click.prevent="nextPage"
        href="#" aria-label="Следующая страница">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </a>
      </li>
    </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
    // nextPage: {
    //   get() {
    //     this.page += 1;
    //   },
    //   set(page) {
    //     this.$emit('paginate', page);
    //   }
    // }
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    nextPage() {
      if (this.page !== Math.ceil(this.count / this.perPage)) {
        this.page += 1;
        this.$emit('paginate', this.page);
      }
    },
    prePage() {
      if (this.page !== 1) {
        this.page -= 1;
        this.$emit('paginate', this.page);
      }
    },
  },
};

</script>
