// 這個檔案是為了讓ts可以規範.vue檔案
// 不然在.vue檔案匯入元件或者頁面時 會找不到定義
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}