export default function damage(attack, defense, accuracy, dodge) {
  const damage = Math.floor((attack / defense) * 10);
  const dodgeChance = (accuracy - dodge) / accuracy;
  const dodged = Math.random() > dodgeChance;
  return dodged ? damage : 0;
}
