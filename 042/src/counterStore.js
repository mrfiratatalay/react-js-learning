// src/counterStore.js

// 1. MobX'ten 'sihirli' fonksiyonları import ediyoruz.
// makeAutoObservable: Bir class'ı otomatik olarak 'observable' yapar.
// runInAction: Async işlemlerden sonra state'i güvenle güncellemek için.
import { makeAutoObservable, runInAction } from 'mobx';

// 2. Notlardaki gibi, Store'umuzu bir class olarak tanımlıyoruz.
class CounterStore {
  // --- Observable State ---
  // @observable accessor count = 0; yerine:
  count = 0; // makeAutoObservable bunu otomatik 'observable' yapacak.
  loading = false;

  // Constructor (Kurucu fonksiyon)
  // Class'tan bir 'instance' (örnek) yaratıldığı an bu fonksiyon çalışır.
  constructor() {
    // 3. İŞTE SİHİR BURADA
    // "Bu class'taki (this) her şeyi otomatik olarak gözlemlenebilir yap."
    // - 'count' ve 'loading'i -> 'observable' (state)
    // - 'doubleCount'u (bu bir 'get'ter) -> 'computed' (hesaplanmış)
    // - 'increment', 'decrement' vs. -> 'action' (eylem)
    // Hepsini tek satırda halleder.
    makeAutoObservable(this);
  }

  // --- Computed Value ---
  // @computed get doubleCount() yerine:
  // (JavaScript'in normal 'getter' syntax'ı)
  get doubleCount() {
    console.log('Computed: doubleCount hesaplanıyor...');
    return this.count * 2;
  }

  // --- Actions ---
  // @action increment() yerine:
  increment() {
    this.count += 1; // Evet, Redux'ta YASAK olan 'mutate' etme işi
                   // MobX'te SERBEST (ve olması gereken) bu.
                   // MobX arka planda bunu yakalayıp 'immutable' hale getirir.
  }

  decrement() {
    this.count -= 1;
  }

  // --- Async Action ---
  // Notlardaki 'fetchCountFromServer'
  async fetchCountFromServer() {
    this.loading = true; // State'i 'action' içinde değiştiriyoruz (bu method bir action)

    try {
      // Gerçek bir API isteği atalım (json-placeholder)
      // Bize { "userId": 1, "id": 1, ... } gibi bir şey dönecek, biz 'id'yi alalım.
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();

      // ÖNEMLİ: 'await' kelimesinden SONRA state'i değiştireceksen,
      // bunu 'runInAction' içine sarman en güvenli yoldur.
      // Neden? Çünkü 'await', fonksiyonun akışını keser.
      // Geri döndüğünde MobX'in kafasının karışmaması için
      // "Hey, ben şimdi state'i değiştiriyorum" demektir bu.
      runInAction(() => {
        this.count = data.id; // Diyelim ki sunucudan 'count' olarak 'id' geldi
        this.loading = false;
      });

    } catch (error) {
      runInAction(() => {
        this.loading = false;
        console.error('API Hatası:', error);
      });
    }
  }
}

// 4. En Önemli Adım: Store'dan bir *örnek (instance)* yaratmak.
// Redux'taki gibi 'createStore' yok. Sadece "new" diyoruz.
const counterStore = new CounterStore();

// 5. Ve bu 'instance'ı export ediyoruz.
// Artık her component bu 'counterStore'u import edip direkt kullanabilir.
export default counterStore;
