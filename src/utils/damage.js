export default function damage(attack, defense, accuracy, dodge) {
  const damage = attack / damage;
  const dodgeChance = (accuracy - dodge) / accuracy;
  const dodged = Math.random > dodgeChance;
  return dodged ? damage : 0;
}
