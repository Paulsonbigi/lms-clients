import Vue from "vue";
export const state = () => ({
  loading: false,
  borrowedBooks: [],
  allBooks: [],
  singleBook: {},
  message: [],
  myApprovedBooks: []
});

export const getters = {
    loading: state => state.loading,
    borrowedBooks: state => state.borrowedBooks,
    allBooks: state => state.allBooks,
    singleBook: state => state.singleBook,
    errors: state => state.errors,
    message: state => state.message,
    myApprovedBooks: state => state.myApprovedBooks,
};

export const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading;
  },

  SET_MESSAGE(state, message) {
    state.message = message;
  },

  SET_BORROWED_BOOKS(state, borrowedBooks) {
    state.borrowedBooks = borrowedBooks;
  },

  SET_ALL_BOOKS(state, allBooks) {
    state.allBooks = allBooks;
  },

  SET_BOOK(state, singleBook) {
    state.singleBook = singleBook;
  },

  SET_BOOK_EDITED_DATA(state, { item, value }) {
    Vue.set(state.singleBook, item, value);
  },

  SET_APPROVED_BOOKS(state, myApprovedBooks) {
    state.myApprovedBooks = myApprovedBooks
  }
};

export const actions = {
    async getMyBorrowedBooks({ commit }) {
        commit("SET_LOADING", true);
        const { data } = await this.$axios.$get("/borrow/books-borrowed");
        commit('SET_BORROWED_BOOKS', data)
        commit("SET_LOADING", false);
    },

    async getMyApprovedBooks({ commit }) {
        commit("SET_LOADING", true);
        const { data } = await this.$axios.$get("/borrow/all-approved-books-for-single-user");
        commit('SET_APPROVED_BOOKS', data);
        commit("SET_LOADING", false);
    },

    async getAllBooks({ commit }, registerData) {
        commit("SET_LOADING", true);
        const { data } = await this.$axios.$get(`/book/get-books`, );
        // const { data } = await this.$axios.$get(`/book/get-books?page=${1}&limit=${5}`, );
        commit('SET_ALL_BOOKS', data);
        commit("SET_LOADING", false);
    },

    async getAllBooksSearch({ commit }, registerData) {
        commit("SET_LOADING", true);
        // const { data } = await this.$axios.$get(`/book/search?book=${registerData}` );
        // commit('SET_ALL_BOOKS', data);
        commit("SET_LOADING", false);
    },

    async getSingleBook({ commit }, bookId) {
        commit("SET_LOADING", true);
        const { book } = await this.$axios.$get("/book/get-books/" + bookId);
        commit('SET_BOOK', book);
        commit("SET_LOADING", false);
    },

    async borrowBook({ commit }, applicationData) {
        commit("SET_LOADING", true);
        const  { success }  = await this.$axios.$post("/borrow/apply", applicationData);
        commit("SET_LOADING", false);
    },

    async editBook({ commit }, formData ) {
      commit("SET_LOADING", true);
      await this.$axios.$patch(`/book/update/${formData.bookId}`, formData.dataM);
      commit("SET_REGISTERING", false);
    }
};
