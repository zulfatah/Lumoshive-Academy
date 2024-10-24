// Interface untuk Dependency Inversion (DIP)
class IProduct {
    getName() {}
    getPrice() {}
    getStock() {}
    decreaseStock(quantity) {}
  }
  
  class Product extends IProduct {
    #name;
    #price;
    #stock;
  
    constructor(name, price, stock) {
      super();
      this.#name = name;
      this.#price = price;
      this.#stock = stock;
    }
  
    getName() {
      return this.#name;
    }
  
    getPrice() {
      return this.#price;
    }
  
    getStock() {
      return this.#stock;
    }
  
    decreaseStock(quantity) {
      if (this.#stock >= quantity) {
        this.#stock -= quantity;
      } else {
        throw new Error('Stock tidak mencukupi');
      }
    }
  }
  
  // Produk Digital, menggunakan pewarisan dari Product
  class DigitalProduct extends Product {
    constructor(name, price) {
      super(name, price, Infinity); // Produk digital memiliki stok tak terbatas
    }
  }
  
  // Transaction class, mengelola transaksi
  class Transaction {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
      this.total = 0;
    }
  
    processTransaction() {
      if (this.product.getStock() >= this.quantity) {
        this.product.decreaseStock(this.quantity);
        this.total = this.product.getPrice() * this.quantity;
      } else {
        throw new Error('Stok produk tidak mencukupi');
      }
    }
  
    getTotal() {
      return this.total;
    }
  
    toString() {
      return `Transaksi: ${this.product.getName()} - Total: ${this.total}`;
    }
  }
  
  // Report class untuk menyimpan dan mencetak laporan penjualan
  class Report {
    constructor() {
      this.salesReport = [];
    }
  
    addTransaction(transaction) {
      this.salesReport.push(transaction);
    }
  
    printReport() {
      console.log('Laporan Penjualan:');
      this.salesReport.forEach((transaction, index) => {
        console.log(`Transaksi ${index + 1}: ${transaction.product.getName()} - Total: ${transaction.getTotal()}`);
      });
    }
  }
  
  // Contoh Penggunaan:
  
  // Membuat beberapa produk
  const laptop = new Product('Laptop', 30000000, 10);
  const ebook = new DigitalProduct('E-book', 50000);
  
  // Membuat transaksi
  const transaction1 = new Transaction(laptop, 1);
  transaction1.processTransaction();
  
  const transaction2 = new Transaction(ebook, 1);
  transaction2.processTransaction();
  
  // Membuat laporan penjualan
  const report = new Report();
  report.addTransaction(transaction1);
  report.addTransaction(transaction2);
  
  // Cetak laporan penjualan
  report.printReport();
