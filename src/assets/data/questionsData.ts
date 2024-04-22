// import { topics } from "./topicsData";

// type Topic = {
//   id: number;
//   fullName: string;
//   name: string;
//   subtopics: Topic[]; // Рекурсивный тип, поскольку subtopics тоже является массивом Topic
// };

export const questions = [
  {
    topic: ObjectId('661e85694f095ec40ed57037'),
    question: {
      text: "Что такое рекурсия в контексте программирования?",
    },
    answers: [
      {
        text: "Процесс, при котором функция вызывает другую функцию.",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Процесс, при котором функция вызывает саму себя.",
        isCorrect: true,
        score: 5,
      },
      {
        text: "Метод сортировки массивов.",
        isCorrect: false,
        score: 1,
      },
      {
        text: "Цикл, который выполняется бесконечное количество раз.",
        isCorrect: false,
        score: 1,
      },
    ],
  },
  {
    topic: ObjectId('661e85694f095ec40ed5703c'),
    question: {
      text: "Какова асимптотическая сложность алгоритма сортировки слиянием?",
    },
    answers: [
      {
        text: "O(n log n)",
        isCorrect: true,
        score: 7,
      },
      {
        text: "O(n²)",
        isCorrect: false,
        score: 2,
      },
      {
        text: "O(log n)",
        isCorrect: false,
        score: 3,
      },
      {
        text: "O(n)",
        isCorrect: false,
        score: 1,
      },
    ],
  },
  {
    topic: ObjectId('661e85694f095ec40ed5703c'),
    question: {
      text: "Какая структура данных работает по принципу LIFO?",
    },
    answers: [
      {
        text: "Стек",
        isCorrect: true,
        score: 6,
      },
      {
        text: "Очередь",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Список",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Массив",
        isCorrect: false,
        score: 2,
      },
    ],
  },
  {
    topic: ObjectId('661e85694f095ec40ed57038'),
    question: {
      text: "Что такое поток в контексте операционных систем?",
    },
    answers: [
      {
        text: "Совокупность ресурсов компьютера",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Выполняющаяся программа",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Компонент процесса, который может выполняться параллельно",
        isCorrect: true,
        score: 5,
      },
      {
        text: "Устройство ввода-вывода",
        isCorrect: false,
        score: 2,
      },
    ],
  },
  {
    topic: ObjectId('661e85694f095ec40ed57039'),
    question: {
      text: "Для чего используется протокол TCP?",
    },
    answers: [
      {
        text: "Для передачи данных без подтверждения доставки",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Для передачи видео",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Для надежной, упорядоченной и безошибочной доставки данных",
        isCorrect: true,
        score: 6,
      },
      {
        text: "Для маршрутизации в сетях",
        isCorrect: false,
        score: 2,
      },
    ],
  },
  {
    topic: ObjectId('661e85694f095ec40ed5703a'),
    question: {
      text: "Что такое нормализация баз данных?",
    },
    answers: [
      {
        text: "Процесс увеличения размера базы данных",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Процесс оптимизации производительности базы данных",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Процесс разделения таблиц для уменьшения избыточности",
        isCorrect: true,
        score: 5,
      },
      {
        text: "Процесс объединения таблиц для ускорения доступа к данным",
        isCorrect: false,
        score: 2,
      },
    ],
  },
  {
    topic: ObjectId('661e85694f095ec40ed5703b'),
    question: {
      text: "Что такое машина Тьюринга?",
    },
    answers: [
      {
        text: "Устройство, используемое для физических вычислений.",
        isCorrect: false,
        score: 1,
      },
      {
        text: "Абстрактная вычислительная модель, используемая для определения выполнимости алгоритмов.",
        isCorrect: true,
        score: 7,
      },
      {
        text: "Реальная машина, используемая в ранних вычислительных системах.",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Тип данных в программировании.",
        isCorrect: false,
        score: 1,
      },
    ],
  },
  {
    topic: ObjectId('661e85694f095ec40ed57037'),
    question: {
      text: "Какова основная цель обучения с подкреплением?",
    },
    answers: [
      {
        text: "Классификация данных на основе предыдущего опыта.",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Прогнозирование будущих событий на основе исторических данных.",
        isCorrect: false,
        score: 3,
      },
      {
        text: "Максимизация некоторой суммы будущих наград.",
        isCorrect: true,
        score: 6,
      },
      {
        text: "Распознавание и интерпретация человеческой речи.",
        isCorrect: false,
        score: 2,
      },
    ],
  },
  {
    topic: ObjectId('661e85694f095ec40ed57037'),
    question: {
      text: "Что такое асимметричное шифрование?",
    },
    answers: [
      {
        text: "Шифрование, использующее один и тот же ключ для шифрования и расшифровки.",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Шифрование, при котором используются разные ключи для шифрования и расшифровки.",
        isCorrect: true,
        score: 6,
      },
      {
        text: "Метод шифрования, использующий симметричные алгоритмы.",
        isCorrect: false,
        score: 2,
      },
      {
        text: "Процесс кодирования информации с использованием геометрических фигур.",
        isCorrect: false,
        score: 1,
      },
    ],
  },
  {
    topic: ObjectId('661e85694f095ec40ed5703c'),
    question: {
      text: "Что такое гамильтонов цикл в графе?",
    },
    answers: [
      {
        text: "Цикл, который проходит через каждую вершину графа ровно один раз.",
        isCorrect: true,
        score: 8,
      },
      {
        text: "Цикл, который проходит через каждое ребро графа ровно один раз.",
        isCorrect: false,
        score: 4,
      },
      {
        text: "Путь, соединяющий все вершины графа без повторений.",
        isCorrect: false,
        score: 3,
      },
      {
        text: "Цикл, который проходит через некоторые, но не все вершины графа.",
        isCorrect: false,
        score: 2,
      },
    ],
  },
];
