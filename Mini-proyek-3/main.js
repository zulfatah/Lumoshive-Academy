// Interface Segregation Principle (ISP): Membuat interface terpisah untuk setiap fitur khusus,
// agar class hanya menggunakan fitur yang dibutuhkan.
class UIInterface {
  createUI() {}
}

class DBInterface {
  createDb() {}
}

class DesignInterface {
  createDesign() {}
}

// Class Developer yang bersifat umum, akan digunakan sebagai parent class.
// Memenuhi Single Responsibility Principle (SRP): Developer hanya berfungsi sebagai dasar untuk peran lain.
class Developer {
  constructor(name) {
    this.name = name;
  }
}

// FrontendDeveloper class, memperluas Developer dan hanya memiliki tanggung jawab terkait UI.
// Memenuhi SRP: hanya berfokus pada pengembangan antarmuka.
// Memenuhi Open/Closed Principle (OCP): class ini terbuka untuk fitur tambahan seperti animasi, tanpa perlu
// mengubah kode dalam Developer.
class FrontendDeveloper extends Developer {
  createUI() {
    console.log(`${this.name} membangun antarmuka pengguna...`);
  }

  createAnimation() {
    console.log(`${this.name} menambahkan animasi ke halaman...`);
  }
}

// BackendDeveloper class, memperluas Developer dan memiliki fitur backend.
// Memenuhi SRP: hanya berfokus pada manajemen database dan API backend.
// Memenuhi OCP: dapat ditambah fitur API tanpa mengubah kode parent class.
class BackendDeveloper extends Developer {
  createDb() {
    console.log(`${this.name} membangun dan mengelola database...`);
  }

  manageAPI() {
    console.log(`${this.name} mengelola API backend...`);
  }
}

// UIUXDesigner class, memperluas Developer dan fokus pada desain antarmuka.
// Memenuhi SRP: hanya bertanggung jawab pada desain UI.
class UIUXDesigner extends Developer {
  createDesign() {
    console.log(`${this.name} membuat desain user interface...`);
  }
}

// Project class, memenuhi Dependency Inversion Principle (DIP) dengan dependency injection.
// Tidak bergantung langsung pada class spesifik, tetapi menerima instance Developer (Frontend, Backend, UI/UX Designer)
// melalui constructor, memungkinkan fleksibilitas dalam mengatur developer yang dibutuhkan.
class Project {
  constructor(uiDeveloper, backendDeveloper, designer) {
    this.uiDeveloper = uiDeveloper;
    this.backendDeveloper = backendDeveloper;
    this.designer = designer;
  }

  // Polimorfisme: Menggunakan developer yang diterima melalui dependency injection.
  buildUI() {
    this.uiDeveloper.createUI();
  }

  setupDatabase() {
    this.backendDeveloper.createDb();
  }

  createProjectDesign() {
    this.designer.createDesign();
  }

  addFeatures() {
    // Memeriksa tipe developer dan menambahkan fitur sesuai class turunan,
    // Memenuhi Liskov Substitution Principle (LSP): dapat menggantikan parent class tanpa mengubah fungsionalitas.
    if (this.uiDeveloper instanceof FrontendDeveloper) {
      this.uiDeveloper.createAnimation();
    }
    if (this.backendDeveloper instanceof BackendDeveloper) {
      this.backendDeveloper.manageAPI();
    }
  }
}

// Contoh Penggunaan
const frontendDev = new FrontendDeveloper("Alice");
const backendDev = new BackendDeveloper("Bob");
const uiuxDesigner = new UIUXDesigner("Carol");

const websiteProject = new Project(frontendDev, backendDev, uiuxDesigner);

// Memanggil metode di Project, yang menggunakan developer sesuai tanggung jawab masing-masing.
websiteProject.buildUI();           // Alice membangun antarmuka pengguna...
websiteProject.setupDatabase();      // Bob membangun dan mengelola database...
websiteProject.createProjectDesign(); // Carol membuat desain user interface...
websiteProject.addFeatures();        // Alice menambahkan animasi ke halaman...; Bob mengelola API backend...
