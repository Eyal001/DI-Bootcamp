for (let star = 1; star <= 6; star++) {
  console.log("*".repeat(star));
}

for (let i = 1; i <= 6; i++) {
  stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
