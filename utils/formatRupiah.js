export default function formatRupiah(num) {
  const reverse = num.toString().split("").reverse().join("");
  const ribuan = reverse.match(/\d{1,3}/g);
  const result = ribuan.join(".").split("").reverse().join("");
  return result;
}