// let siswa1 = 'Amila Zahira';
// let siswa2 = 'Ishaq Usuludin';
// let siswa3 = 'Salsabila';
// let siswa4 = 'Kevin';

// // console.log(siswa1);
// // console.log(siswa1);
// // console.log(siswa1);
// // console.log(siswa1);

// // ARRAY
// let semuaSiswa = [
//     'Amila Zahira',
//     'Ishaq Usuludin',
//     'Salsabila',
//     'Kevin',
//     'Rico Maulana'
// ];

// let arrNumbers = [8, 5, 3, 6, 10, 27.5, 11, 18, 4];

// let stringNumber = ['Hari ini', 'saya makan', 10, 'kali'];

// // hk
// let arrCombine = stringNumber[0] + ' ' + stringNumber[1] + ' ' + stringNumber[2] + ' ' + stringNumber[3];
// console.log(arrCombine);

// OBJECT
// let biodataSiswa1 = {
//     namaSiswa: 'Naufal',
//     nisn: 78963367,
//     jenisKelamin: 'Pria',
//     agama: 'Islam',
//     umur: 15,
//     kelas: 10,
// };

// let biodataSiswa2 = {
//     namaSiswa: 'Fathir',
//     nisn: 8972692,
//     jenisKelamin: 'Pria',
//     agama: 'Islam',
//     umur: 15,
//     kelas: 12,
// };

// // console.log(biodataSiswa.nisn);
// // console.log(biodataSiswa['jenisKelamin']);

// let students = [];
// students.push(biodataSiswa1);
// students.push(biodataSiswa2);

// const a = 100000;
// console.log(typeof a);
// console.log(students);

let blogs = [];

function addBlog(event) {

    event.preventDefault();

    let titleData = document.getElementById('input-blog-title').value;
    let contentData = document.getElementById('input-blog-content').value;
    let imageData = document.getElementById('input-blog-image');

    imageData = URL.createObjectURL(imageData.files[0]);

    let blog = {
        author: 'Rhoma Irama',
        title: titleData,
        content: contentData,
        image: imageData,
        postedAt: Date(),
    };

    blogs.push(blog);

    document.getElementById('input-blog-title').value = '';
    document.getElementById('input-blog-content').value = '';
    document.getElementById('input-blog-image').value = '';

    renderBlog()
}