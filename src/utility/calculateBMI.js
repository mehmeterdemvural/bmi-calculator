const calculateBMI = (weight, height) => {
  // Kilogram cinsinden ağırlık, metre cinsinden boy alınır
  // BMI = ağırlık / (boy * boy)
  const heightInMeters = height / 100; // Boyu metreye çevirme
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2); // BMI'yi 2 ondalık basamağa yuvarla
};

export default calculateBMI; // calculateBMI fonksiyonunu dışa aktar
