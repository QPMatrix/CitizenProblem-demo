import { Problem } from "@/types";
import { formatDateTime } from "@/lib/utils.ts";

export const mockProblems: Problem[] = [
  {
    id: 1,
    title: "דליפת מים ברחוב הראשי",
    description: "יש דליפת מים ברחוב הראשי.",
    images: [
      "https://via.placeholder.com/500x300?text=Water+Leakage", // Placeholder for Water leakage
      "https://via.placeholder.com/500x300?text=Additional+Image+1",
      "https://via.placeholder.com/500x300?text=Additional+Image+2",
      "https://via.placeholder.com/500x300?text=Additional+Image+3",
    ],
    createdAt: formatDateTime("2024-09-10"),
    submitBy: "אבי כהן",
  },
  {
    id: 2,
    title: "פנס רחוב שבור",
    description: "פנס רחוב שבור בכניסה לפארק.",
    images: [
      "https://via.placeholder.com/500x300?text=Broken+Streetlight", // Placeholder for Broken streetlight
      "https://via.placeholder.com/500x300?text=Additional+Image+1",
      "https://via.placeholder.com/500x300?text=Additional+Image+2",
      "https://via.placeholder.com/500x300?text=Additional+Image+3",
    ],
    createdAt: formatDateTime("2024-09-09"),
    submitBy: "דני לוי",
  },
  {
    id: 3,
    title: "בור בכביש הראשי",
    description: "בור בכביש הראשי מסכן את הנהגים.",
    images: [
      "https://via.placeholder.com/500x300?text=Pothole", // Placeholder for Pothole
      "https://via.placeholder.com/500x300?text=Additional+Image+1",
      "https://via.placeholder.com/500x300?text=Additional+Image+2",
      "https://via.placeholder.com/500x300?text=Additional+Image+3",
    ],
    createdAt: formatDateTime("2024-09-08"),
    submitBy: "אבי כהן",
  },
  {
    id: 4,
    title: "גרפיטי על בניין ציבורי",
    description: "גרפיטי על בניין ציבורי.",
    images: [
      "https://via.placeholder.com/500x300?text=Graffiti", // Placeholder for Graffiti
      "https://via.placeholder.com/500x300?text=Additional+Image+1",
      "https://via.placeholder.com/500x300?text=Additional+Image+2",
      "https://via.placeholder.com/500x300?text=Additional+Image+3",
    ],
    createdAt: formatDateTime("2024-09-07"),
    submitBy: "דני לוי",
  },
  {
    id: 5,
    title: "השלכת פסולת בלתי חוקית",
    description: "השלכת פסולת בלתי חוקית בשטח ריק.",
    images: [
      "https://via.placeholder.com/500x300?text=Illegal+Waste+Dumping", // Placeholder for Illegal waste dumping
      "https://via.placeholder.com/500x300?text=Additional+Image+1",
      "https://via.placeholder.com/500x300?text=Additional+Image+2",
      "https://via.placeholder.com/500x300?text=Additional+Image+3",
    ],
    createdAt: formatDateTime("2024-09-06"),
    submitBy: "אבי כהן",
  },
];
