const blocks = {
  acronym: { title: "Расшифровка", label: "Блок 1", short: "Аббревиатуры" },
  distinction: { title: "CAT или MT?", label: "Блок 2", short: "CAT и MT" },
  matching: { title: "Сопоставление понятий", label: "Блок 3", short: "Понятия" },
  case: { title: "Мини-кейсы", label: "Блок 4", short: "Кейсы" },
  final: { title: "Итоговая самопроверка", label: "Финал", short: "Самопроверка" }
};

const questions = [
  {
    id: "a1", block: "acronym", type: "single",
    prompt: "Как расшифровывается CAT?",
    options: ["Computer-Assisted Translation", "Computer-Automated Terminology", "Context-Aware Text", "Controlled Automatic Translation"],
    correct: [0], answer: "Computer-Assisted Translation",
    explanation: "CAT — перевод с использованием компьютерных средств. В этой модели переводчик остаётся главным участником процесса."
  },
  {
    id: "a2", block: "acronym", type: "single",
    prompt: "Как расшифровывается MT?",
    options: ["Machine Translation", "Memory Translation", "Multilingual Terminology", "Machine Transcription"],
    correct: [0], answer: "Machine Translation",
    explanation: "MT — машинный перевод: система автоматически создаёт перевод, а человек может выступать постредактором."
  },
  {
    id: "a3", block: "acronym", type: "single",
    prompt: "Как расшифровывается NMT?",
    options: ["Neural Machine Translation", "Natural Multilingual Text", "Networked Memory Translation", "Neural Meaning Transfer"],
    correct: [0], answer: "Neural Machine Translation",
    explanation: "NMT — нейронный машинный перевод, то есть направление машинного перевода на основе нейронных моделей."
  },
  {
    id: "a4", block: "acronym", type: "single",
    prompt: "Как расшифровывается TM?",
    options: ["Translation Memory", "Terminology Model", "Text Matching", "Translation Method"],
    correct: [0], answer: "Translation Memory",
    explanation: "TM — память переводов: в ней сохраняются ранее переведённые сегменты исходного текста и их переводы."
  },
  {
    id: "a5", block: "acronym", type: "single",
    prompt: "Как расшифровывается NLP?",
    options: ["Natural Language Processing", "Neural Lexical Prediction", "Natural Linguistic Programming", "Network Language Protocol"],
    correct: [0], answer: "Natural Language Processing",
    explanation: "NLP — обработка естественного языка: область методов и технологий для компьютерной работы с естественным языком."
  },
  {
    id: "a6", block: "acronym", type: "single",
    prompt: "Как расшифровывается LLM?",
    options: ["Large Language Model", "Linguistic Learning Machine", "Large Lexical Memory", "Language Logic Model"],
    correct: [0], answer: "Large Language Model",
    explanation: "LLM — большая языковая модель. Она генерирует вероятное продолжение текста, а не извлекает доказанный факт из базы знаний."
  },
  {
    id: "d1", block: "distinction", type: "single",
    prompt: "Переводчик сам выполняет перевод и использует цифровую среду как помощника. Какая это модель работы?",
    options: ["CAT", "MT", "Только LLM", "NLP без участия переводчика"],
    correct: [0], answer: "CAT",
    explanation: "При CAT переводчик — главный, а программа помогает организовать и ускорить его работу."
  },
  {
    id: "d2", block: "distinction", type: "single",
    prompt: "Система автоматически создаёт перевод, после чего специалист проверяет и редактирует результат. Какая это модель?",
    options: ["MT", "CAT без MT", "TM", "NLP как учебная дисциплина"],
    correct: [0], answer: "MT",
    explanation: "В MT основную генерацию перевода выполняет система; специалист работает с полученным результатом как постредактор."
  },
  {
    id: "d3", block: "distinction", type: "single",
    prompt: "Как CAT и MT соотносятся в профессиональной практике?",
    options: ["Могут сочетаться в одном процессе", "Всегда исключают друг друга", "CAT — разновидность только NMT", "MT всегда отменяет проверку человеком"],
    correct: [0], answer: "CAT и MT могут сочетаться",
    explanation: "Профессиональный процесс может объединять CAT-среду, машинный перевод и последующее редактирование человеком."
  },
  {
    id: "m1", block: "matching", type: "single",
    prompt: "Сопоставьте описание с понятием: «сохраняет ранее переведённые пары сегментов для повторного использования».",
    options: ["TM", "MT", "NLP", "LLM"],
    correct: [0], answer: "TM — Translation Memory",
    explanation: "Именно память переводов работает с сохранёнными парами «исходный сегмент — перевод»."
  },
  {
    id: "m2", block: "matching", type: "single",
    prompt: "Сопоставьте описание с понятием: «область компьютерной обработки естественного языка».",
    options: ["NLP", "NMT", "TM", "CAT"],
    correct: [0], answer: "NLP — Natural Language Processing",
    explanation: "NLP объединяет методы и технологии, которые позволяют компьютеру работать с естественным языком."
  },
  {
    id: "m3", block: "matching", type: "single",
    prompt: "Сопоставьте описание с понятием: «генерирует вероятное продолжение текста».",
    options: ["LLM", "TM", "CAT", "MT как любой автоматизированный процесс"],
    correct: [0], answer: "LLM — Large Language Model",
    explanation: "Такой принцип генерации объясняет, почему ответ LLM нельзя автоматически считать доказанным фактом."
  },
  {
    id: "c1", block: "case", type: "single",
    prompt: "В большом руководстве повторяются одинаковые фрагменты. Что поможет использовать уже утверждённые переводы?",
    options: ["Память переводов (TM)", "Новый запрос к LLM без контекста", "Отключение CAT-среды", "Только ручной поиск по каждой странице"],
    correct: [0], answer: "Память переводов (TM)",
    explanation: "TM позволяет повторно использовать сохранённые пары сегментов и поддерживать работу с повторяющимся текстом."
  },
  {
    id: "c2", block: "case", type: "single",
    prompt: "Нужно быстро получить черновой перевод, а затем профессионально проверить и исправить его. Какой сценарий описан?",
    options: ["MT с постредактированием", "Только TM без перевода", "CAT без каких-либо автоматических предложений", "LLM как доказательный источник"],
    correct: [0], answer: "MT с постредактированием",
    explanation: "Сначала перевод создаёт система MT, затем человек оценивает и редактирует результат."
  },
  {
    id: "c3", block: "case", type: "single",
    prompt: "LLM сообщила специальный факт, но не указала источник. Как поступить корректно?",
    options: ["Проверить факт по надёжному источнику", "Считать ответ доказанным", "Использовать без проверки, если текст звучит уверенно", "Считать LLM базой знаний"],
    correct: [0], answer: "Проверить факт по надёжному источнику",
    explanation: "Ответ модели не равен доказанному факту: возможны галлюцинации, устаревшие сведения и отсутствие источника."
  },
  {
    id: "f1", block: "final", type: "single",
    prompt: "Кто остаётся главным участником процесса в модели CAT?",
    options: ["Переводчик", "Система машинного перевода", "Языковая модель", "Память переводов"],
    correct: [0], answer: "Переводчик",
    explanation: "CAT — помощник переводчика: решения и ответственность остаются у специалиста."
  },
  {
    id: "f2", block: "final", type: "single",
    prompt: "Какая последовательность соответствует сценарию работы с LLM в zero-shot режиме?",
    options: ["Задача → инструкция → LLM", "Задача → новые данные → обучение отдельной модели → развёртывание", "Перевод → удаление источника → публикация", "TM → обучение переводчика → MT"],
    correct: [0], answer: "Задача → инструкция → LLM",
    explanation: "В zero-shot сценарии задачу формулируют в инструкции для уже существующей LLM без отдельного обучения модели под эту задачу."
  },
  {
    id: "f3", block: "final", type: "single",
    prompt: "Какое утверждение о LLM корректно?",
    options: ["Ответ модели нужно проверять", "LLM всегда приводит первичный источник", "Уверенная формулировка гарантирует истинность", "LLM не может выдавать устаревшие сведения"],
    correct: [0], answer: "Ответ модели нужно проверять",
    explanation: "LLM может галлюцинировать, использовать устаревшие сведения и отвечать без источника."
  },
  {
    id: "f4", block: "final", type: "single",
    prompt: "Что обозначает NMT?",
    options: ["Нейронный машинный перевод", "Память переводов", "Обработка естественного языка", "Компьютерная помощь переводчику"],
    correct: [0], answer: "Нейронный машинный перевод",
    explanation: "NMT расшифровывается как Neural Machine Translation и относится к машинному переводу."
  },
  {
    id: "f5", block: "final", type: "multiple",
    prompt: "Какие риски работы с LLM были отмечены в курсе?",
    hint: "Можно выбрать несколько вариантов.",
    options: ["Галлюцинации", "Устаревшие знания", "Отсутствие источника", "Непредсказуемость", "Риски конфиденциальности данных", "Гарантированная доказательность ответа"],
    correct: [0, 1, 2, 3, 4], answer: "Галлюцинации, устаревшие знания, отсутствие источника, непредсказуемость и конфиденциальность данных",
    explanation: "Все пять рисков требуют критической проверки результата и осмотрительного обращения с данными."
  }
];

const els = {
  startScreen: document.querySelector("#startScreen"),
  quizScreen: document.querySelector("#quizScreen"),
  resultScreen: document.querySelector("#resultScreen"),
  startButton: document.querySelector("#startButton"),
  stageLabel: document.querySelector("#stageLabel"),
  stageTitle: document.querySelector("#stageTitle"),
  scoreValue: document.querySelector("#scoreValue"),
  progressText: document.querySelector("#progressText"),
  progressPercent: document.querySelector("#progressPercent"),
  progressTrack: document.querySelector(".progress-track"),
  progressBar: document.querySelector("#progressBar"),
  questionNumber: document.querySelector("#questionNumber"),
  questionType: document.querySelector("#questionType"),
  questionText: document.querySelector("#questionText"),
  questionHint: document.querySelector("#questionHint"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#feedback"),
  feedbackIcon: document.querySelector("#feedbackIcon"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  correctAnswer: document.querySelector("#correctAnswer"),
  feedbackExplanation: document.querySelector("#feedbackExplanation"),
  checkButton: document.querySelector("#checkButton"),
  nextButton: document.querySelector("#nextButton"),
  finalScore: document.querySelector("#finalScore"),
  resultMessage: document.querySelector("#resultMessage"),
  resultStats: document.querySelector("#resultStats"),
  retryErrorsButton: document.querySelector("#retryErrorsButton"),
  restartButton: document.querySelector("#restartButton"),
  sizeToggle: document.querySelector("#sizeToggle"),
  fullscreenButton: document.querySelector("#fullscreenButton")
};

let activeQuestions = [...questions];
let currentIndex = 0;
let selected = new Set();
let score = 0;
let answered = false;
let wrongIds = [];
let resultsByBlock = {};

function showScreen(screen) {
  [els.startScreen, els.quizScreen, els.resultScreen].forEach(item => item.classList.add("hidden"));
  screen.classList.remove("hidden");
  document.querySelector("#app").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz(list = questions) {
  activeQuestions = [...list];
  currentIndex = 0;
  selected = new Set();
  score = 0;
  answered = false;
  wrongIds = [];
  resultsByBlock = {};
  showScreen(els.quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const q = activeQuestions[currentIndex];
  const block = blocks[q.block];
  const position = currentIndex + 1;
  const percent = Math.round((position / activeQuestions.length) * 100);
  selected = new Set();
  answered = false;

  els.stageLabel.textContent = block.label;
  els.stageTitle.textContent = block.title;
  els.scoreValue.textContent = score;
  els.progressText.textContent = `Задание ${position} из ${activeQuestions.length}`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressBar.style.width = `${percent}%`;
  els.progressTrack.setAttribute("aria-valuemax", activeQuestions.length);
  els.progressTrack.setAttribute("aria-valuenow", position);
  els.questionNumber.textContent = String(position).padStart(2, "0");
  els.questionType.textContent = q.type === "multiple" ? "Выберите все верные ответы" : "Выберите один ответ";
  els.questionText.textContent = q.prompt;
  els.questionHint.textContent = q.hint || "";
  els.questionHint.classList.toggle("hidden", !q.hint);
  els.answers.innerHTML = "";

  const optionOrder = q.options.map((_, index) => index).sort(() => Math.random() - 0.5);
  optionOrder.forEach(index => {
    const option = q.options[index];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.dataset.index = String(index);
    button.dataset.multiple = String(q.type === "multiple");
    button.setAttribute("aria-pressed", "false");
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index, button, q.type));
    els.answers.appendChild(button);
  });

  els.feedback.className = "feedback hidden";
  els.checkButton.classList.remove("hidden");
  els.checkButton.disabled = true;
  els.nextButton.classList.add("hidden");
  els.nextButton.innerHTML = currentIndex === activeQuestions.length - 1 ? "Показать результат <span aria-hidden=\"true\">→</span>" : "Следующее <span aria-hidden=\"true\">→</span>";
}

function selectOption(index, button, type) {
  if (answered) return;
  if (type === "single") {
    selected.clear();
    els.answers.querySelectorAll(".answer-option").forEach(item => {
      item.classList.remove("selected");
      item.setAttribute("aria-pressed", "false");
    });
    selected.add(index);
    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
  } else {
    if (selected.has(index)) {
      selected.delete(index);
      button.classList.remove("selected");
      button.setAttribute("aria-pressed", "false");
    } else {
      selected.add(index);
      button.classList.add("selected");
      button.setAttribute("aria-pressed", "true");
    }
  }
  els.checkButton.disabled = selected.size === 0;
}

function sameSelection(correct, chosen) {
  return correct.length === chosen.size && correct.every(index => chosen.has(index));
}

function checkAnswer() {
  if (answered || selected.size === 0) return;
  const q = activeQuestions[currentIndex];
  const isCorrect = sameSelection(q.correct, selected);
  answered = true;
  if (isCorrect) score += 1;
  else wrongIds.push(q.id);

  if (!resultsByBlock[q.block]) resultsByBlock[q.block] = { correct: 0, total: 0 };
  resultsByBlock[q.block].total += 1;
  if (isCorrect) resultsByBlock[q.block].correct += 1;

  els.answers.querySelectorAll(".answer-option").forEach(button => {
    const index = Number(button.dataset.index);
    button.disabled = true;
    if (q.correct.includes(index)) button.classList.add("correct");
    else if (selected.has(index)) button.classList.add("wrong");
  });

  els.feedback.className = `feedback ${isCorrect ? "" : "incorrect"}`.trim();
  els.feedbackIcon.textContent = isCorrect ? "✓" : "!";
  els.feedbackTitle.textContent = isCorrect ? "Верно" : "Нужно поправить";
  els.correctAnswer.textContent = `Корректный вариант: ${q.answer}.`;
  els.feedbackExplanation.textContent = q.explanation;
  els.scoreValue.textContent = score;
  els.checkButton.classList.add("hidden");
  els.nextButton.classList.remove("hidden");
  els.feedback.focus({ preventScroll: true });
  els.feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextQuestion() {
  if (!answered) return;
  if (currentIndex < activeQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    document.querySelector("#questionCard").scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    showResults();
  }
}

function showResults() {
  showScreen(els.resultScreen);
  els.finalScore.textContent = score;
  els.finalScore.nextElementSibling.textContent = `/ ${activeQuestions.length}`;
  const ratio = score / activeQuestions.length;
  if (ratio === 1) els.resultMessage.textContent = "Все ответы верны. Термины и различия между моделями работы усвоены уверенно.";
  else if (ratio >= .8) els.resultMessage.textContent = "Очень хороший результат. Осталось повторить лишь несколько различий и формулировок.";
  else if (ratio >= .6) els.resultMessage.textContent = "Основа усвоена. Повторение ошибок поможет закрепить различия между инструментами и моделями.";
  else els.resultMessage.textContent = "Есть темы для повторения. Разберите объяснения и пройдите ошибки ещё раз — это займёт несколько минут.";

  els.resultStats.innerHTML = "";
  Object.entries(resultsByBlock).forEach(([key, value]) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<span>${blocks[key].short}</span><strong>${value.correct} / ${value.total}</strong>`;
    els.resultStats.appendChild(card);
  });
  els.retryErrorsButton.classList.toggle("hidden", wrongIds.length === 0);

  try {
    localStorage.setItem("digitalTranslationTrainer", JSON.stringify({ score, total: activeQuestions.length, finishedAt: new Date().toISOString() }));
  } catch (_) {
    // The trainer works even when local storage is unavailable.
  }
}

els.startButton.addEventListener("click", () => startQuiz());
els.checkButton.addEventListener("click", checkAnswer);
els.nextButton.addEventListener("click", nextQuestion);
els.restartButton.addEventListener("click", () => startQuiz());
els.retryErrorsButton.addEventListener("click", () => {
  const retry = questions.filter(question => wrongIds.includes(question.id));
  startQuiz(retry.length ? retry : questions);
});

els.sizeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("large-text");
  const enlarged = document.documentElement.classList.contains("large-text");
  els.sizeToggle.setAttribute("aria-label", enlarged ? "Обычный размер текста" : "Увеличить текст");
  els.sizeToggle.title = enlarged ? "Обычный размер текста" : "Увеличить текст";
});

els.fullscreenButton.addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (_) {
    // Fullscreen may be blocked by browser policy; the rest of the trainer is unaffected.
  }
});

document.addEventListener("fullscreenchange", () => {
  const active = Boolean(document.fullscreenElement);
  els.fullscreenButton.setAttribute("aria-label", active ? "Выйти из полноэкранного режима" : "Полноэкранный режим");
  els.fullscreenButton.title = active ? "Выйти из полноэкранного режима" : "Полноэкранный режим";
});

document.addEventListener("keydown", event => {
  if (event.key !== "Enter" || els.quizScreen.classList.contains("hidden")) return;
  const tag = document.activeElement?.tagName;
  if (tag === "BUTTON" && document.activeElement?.classList.contains("answer-option")) return;
  if (!answered && !els.checkButton.disabled) checkAnswer();
  else if (answered) nextQuestion();
});
