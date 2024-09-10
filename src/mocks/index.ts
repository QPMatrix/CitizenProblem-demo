import { Problem } from "@/types";
import { formatDateTime } from "@/lib/utils.ts";
import placeHolderImage from "@/assets/placeholder.png";
export const mockProblems: Problem[] = [
  {
    id: 1,
    title: "דליפת מים ברחוב הראשי",
    description: "יש דליפת מים ברחוב הראשי.",
    images: [
      placeHolderImage,
      placeHolderImage,
      placeHolderImage,
      placeHolderImage,
    ],
    createdAt: formatDateTime("2024-09-10"),
    submitBy: "אבי כהן",
  },
  {
    id: 2,
    title: "פנס רחוב שבור",
    description: "פנס רחוב שבור בכניסה לפארק.",
    images: [
      placeHolderImage,
      placeHolderImage,
      placeHolderImage,
      placeHolderImage,
    ],
    createdAt: formatDateTime("2024-09-09"),
    submitBy: "דני לוי",
  },
  {
    id: 3,
    title: "בור בכביש הראשי",
    description: "בור בכביש הראשי מסכן את הנהגים.",
    images: [
      placeHolderImage,
      placeHolderImage,
      placeHolderImage,
      placeHolderImage,
    ],
    createdAt: formatDateTime("2024-09-08"),
    submitBy: "אבי כהן",
  },
  {
    id: 4,
    title: "גרפיטי על בניין ציבורי",
    description: "גרפיטי על בניין ציבורי.",
    images: [
      placeHolderImage,
      placeHolderImage,
      placeHolderImage,
      placeHolderImage,
    ],
    createdAt: formatDateTime("2024-09-07"),
    submitBy: "דני לוי",
  },
  {
    id: 5,
    title: "השלכת פסולת בלתי חוקית",
    description: "השלכת פסולת בלתי חוקית בשטח ריק.",
    images: [
      placeHolderImage,
      placeHolderImage,
      placeHolderImage,
      placeHolderImage,
    ],
    createdAt: formatDateTime("2024-09-06"),
    submitBy: "אבי כהן",
  },
];
