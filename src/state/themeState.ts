import { reactive } from 'vue'

export const themes = reactive({
  list: [
    { id: 0, hash: '#about', text: 'Über Uns', isOpen: false, isNavActive: false },
    { id: 1, hash: '#events', text: 'Events', isOpen: false, isNavActive: false },
    { id: 2, hash: '#crochet', text: 'Häkeln', isOpen: false, isNavActive: false },
    { id: 3, hash: '#puzzle', text: 'Puzzles', isOpen: false, isNavActive: false }
  ],
  getThemeById(id: number) {
    return this.list.find(e => e.id == id);
  },
   getThemeByHash(hash: String) {
    return this.list.find(e => e.hash == hash);
  }
})