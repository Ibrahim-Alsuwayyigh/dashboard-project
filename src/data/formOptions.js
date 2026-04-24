export const corporate = ["Tawuniya"]

export const daRequiredOptions = ["Taqdeer", "No Taqdeer"]
export const statusOptions = [
  "Assigned",
  "Pending",
  "Completed",
  "Cancelled",
]
export const cities = [
  "Riyadh",
  "Qatif",
  "Jubail",
  "Dhahran",
  "Khobar",
  "Jeddah",
]
export const provider = [
  "حسن السيد",
  "ازهر",
  "نجم",
  "سيف",
  "نايف",
  "محمد نديم",
  "بابكر",
  "احمد جمال",
  "جاسم عباس",
  "محمد عبادي",
  "محمد عبدالكريم",
  "كرم سعيد",
  "مصباح",
  "علاء",
  "عيد",
  "",
  "حمدي",
  "محمد حامد",
  "زاهد",

]
function generatePickupTimes(start, end, intervalMinutes) {
  const times = []

  let current = new Date(`1970-01-01T${start}:00`)
  const finish = new Date(`1970-01-01T${end}:00`)

  while (current <= finish) {
    const hours = String(current.getHours()).padStart(2, "0")
    const minutes = String(current.getMinutes()).padStart(2, "0")

    times.push(`${hours}:${minutes}`)

    current.setMinutes(current.getMinutes() + intervalMinutes)
  }

  return times
}

export const pickupTimes = generatePickupTimes("08:00", "20:00", 30)