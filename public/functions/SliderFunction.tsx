//29.08.2025 by TeaWithSugar
"use client";
import { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import Image1 from "@/public/image/slider/1.jpg";
import Image2 from "@/public/image/slider/2.jpg";
export default function SliderFunction() {
  const imgArr: StaticImageData[] = [Image1, Image2];
  //Для предотвращения анимации при первом рендере
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const [lastClick, setLastClick] = useState<number>(0);
  const couldown = 1000;

  // Переменные для свайпов
  // Переменные для определения координат
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const currentX = useRef<number>(0);
  const currentY = useRef<number>(0);
  const differenceYRef = useRef<number>(0);
  const differenceXRef = useRef<number>(0);
  //Для определения свайп или не свайп на данный момент
  const isSwipe = useRef<boolean>(false);
  //Для определения свайп или не свайп анимация на данный момент
  const [swipeANIM, setSwipeANIM] = useState<boolean>(false);
  //Для определения зажато или нет на слайдере
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  //Определен свайп или нет на данный момент
  const definedSwipe = useRef<boolean>(false);
  //Количество свайпов по середине ширины экрана
  const countSwipe = useRef<number>(0);
  //Стартовый индекс картинки при свайпе
  const [startIndex, setStartIndex] = useState<number>(0);
  //для определения стороны куда будет свайп
  const currentSideRef = useRef<number>(0);
  //Позиция активной картинки
  const currentPos = useRef<number>(0);
  //Позиция следующей картинки
  const nextPos = useRef<number>(0);
  //Текущий индекс картинки
  const currentIndexRef = useRef<number>(0);
  //Триггер в момент прохода порога картинки
  const [diffTriggerX, setDiffTriggerX] = useState<number>(0);
  //Переменная для того чтобы человек отпустил зажатую картинку перед свайпом
  const [isCouldownSwipe, setIsCouldownSwipe] = useState<boolean>(false);
  //Нужная переменная для ререндера плавного
  const [_, setRerenderForSwiper] = useState<number>(0);
  // Функция для измениня ширины
  function handleWidth() {
    setCurrentWidth(window.innerWidth);
  }
  // Интервал функция
  function setIntervalFunction() {
    intervalRef.current && clearInterval(intervalRef.current); //Очистка интервала
    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % imgArr.length; //Смена индекса картинки
      currentSideRef.current = 1; //Установка стороны анимации справа(текущий после переключения) налево(следующий после переключения)
      setSwipeANIM(false); //Снятие флага для свайп-анимации
      setIsFirstRender(false); //Снятие флага первого рендера
      const currentTime = Date.now(); //Время в момент выполнения функции
      setLastClick(currentTime); //Установка текущего времени в state lastClick
    }, 3000);
  }
  // Функция для кнопок слайдера
  function buttonSlideFunction(side: number) {
    const currentTime = Date.now(); //Время в момент выполнения функции
    if (currentTime - lastClick <= couldown) {
      //couldown на нажатие кнопок
      return;
    }
    intervalRef.current && clearInterval(intervalRef.current); //Очистка интервала
    setSwipeANIM(false); //Снятие флага для свайп-анимации
    setIsFirstRender(false); //Снятие флага первого рендера
    currentSideRef.current = side; //Установка стороны для анимации через передачу side
    currentIndexRef.current = (currentIndexRef.current + 1) % imgArr.length; //Смена индекса картинки
    setLastClick(currentTime); //Установка текущего времени в state lastClick
    setTimeout(() => {
      setIntervalFunction(); //Установка интервала через секунду
    }, couldown);
  }
  // Функция для начала свайпа(нажатие на картинку)
  function startSwipe(e: React.TouchEvent | React.MouseEvent) {
    const currentTime = Date.now(); //Текущее время
    if (currentTime - lastClick <= couldown + 100) {
      //Проверка на couldown
      setIsCouldownSwipe(true); //Установка флага для того чтобы человек отпустил картинку перед свайпом
      return;
    }
    intervalRef.current && clearInterval(intervalRef.current); //Очистка интервала
    //Установка текущего положения мышки/пальца на экране и стартовой точки
    if ("touches" in e) {
      startX.current = e.touches[0].clientX;
      currentX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
      currentY.current = e.touches[0].clientY;
    } else {
      startX.current = e.clientX;
      currentX.current = e.clientX;
      startY.current = e.clientY;
      currentY.current = e.clientY;
    }
    setStartIndex(currentIndexRef.current); //Установка индекса текущей картинки
    setIsMouseDown(true); //Установка флага для проверки зажатия кнопки
    setIsFirstRender(false); //Снятие флага первого рендера
  }
  // Функция для конца свайпа(отпускание)
  function endSwipe() {
    const currentTime = Date.now(); //Текущее время
    setLastClick(currentTime); //Установка времени когда был сделан свайп
    setIsCouldownSwipe(false); //Снятие флага для того чтобы человек отпустил картинку перед свайпом
    differenceXRef.current = 0; //Обнуление разницы по X оси
    differenceYRef.current = 0; //Обнуление разницы по оси Y
    countSwipe.current = 0; //Обнуление количество свайпов
    if (isSwipe.current) {
      //Если произошел свайп
      setSwipeANIM(true); //Установка флага свайп-анимации в true
      setDiffTriggerX(0); //Обнуление разницы триггера по оси X
      setIsMouseDown(false); //Снятие флага зажатой мышки/пальца
      startX.current = 0; //Обнуление стартовой позиции по оси X
      startY.current = 0; //Обнуление стартовой позиции по оси Y
      currentX.current = 0; //Обнуление текущей позиции по оси X
      currentY.current = 0; //Обнуление текущей позиции по оси Y
      document.documentElement.style.overflow = "unset"; //Снятие блокировки скролла
    }
    isSwipe.current = false; //Снятие флага свайпа
    definedSwipe.current = false; //Обнуления флага определен свайп или нет
    intervalRef.current && clearInterval(intervalRef.current); //Очистка интервала
    setTimeout(() => {
      //Установка интервала
      setIntervalFunction();
    }, couldown);
  }
  // Функция во время свайпа
  function swipeFunction(e: React.TouchEvent | React.MouseEvent) {
    if (!isMouseDown || isCouldownSwipe) {
      //Если мышка/палец не зажат или была зажата картинка во время couldown
      return;
    }
    //Установка текущего положения мышки/пальца
    if ("touches" in e) {
      currentX.current = e.touches[0].clientX;
      currentY.current = e.touches[0].clientY;
    } else {
      currentX.current = e.clientX;
      currentY.current = e.clientY;
    }
    //Расчет разниц по оси X и Y
    differenceXRef.current = Math.abs(currentX.current - startX.current);
    differenceYRef.current = Math.abs(currentY.current - startY.current);
    //Если разница X больше разницы разницы Y и не определено свайп или нет, то это свайп, иначе не свайп
    if (
      differenceXRef.current > differenceYRef.current &&
      !definedSwipe.current
    ) {
      isSwipe.current = true;
      definedSwipe.current = true; //Установка флага определения свайп или нет
    } else if (
      differenceXRef.current < differenceYRef.current &&
      !definedSwipe.current
    ) {
      isSwipe.current = false;
      definedSwipe.current = true; //Установка флага определения свайп или нет
    }
    if (isSwipe.current) {
      document.documentElement.style.overflow = "hidden"; //Блокировка скроллинга страницы
      intervalRef.current && clearInterval(intervalRef.current); //Очистка интервала
      //Если свайп
      const threshold = currentWidth / 2; //Переменная порог переключения картинки
      const sideCheck = currentX.current - startX.current; //Переменная для определения стороны
      //Если триггер перелистывания стал меньше или больше 0 или 1, то смена текущего индекса картинки
      if (
        diffTriggerX < Math.floor(differenceXRef.current / threshold) ||
        diffTriggerX > Math.floor(differenceXRef.current / threshold)
      ) {
        countSwipe.current = countSwipe.current + 1; //Установка количество прохождения порога
        currentIndexRef.current =
          (startIndex + countSwipe.current) % imgArr.length; //Смена текущего индекса
      }
      //Если 1 или 0, то установить триггер
      if (Math.floor(differenceXRef.current / threshold) !== 2) {
        setDiffTriggerX(Math.floor(differenceXRef.current / threshold));
      }
      //Расчет стороны и положений для анимации и визуала
      if (sideCheck < 0) {
        if (sideCheck > -threshold) {
          currentSideRef.current = -1;
          currentPos.current = (-differenceXRef.current / currentWidth) * 100;
          nextPos.current =
            ((currentWidth - differenceXRef.current) / currentWidth) * 100;
        } else if (sideCheck < -threshold) {
          currentSideRef.current = 1;
          currentPos.current =
            ((currentWidth - differenceXRef.current) / currentWidth) * 100;
          nextPos.current = (-differenceXRef.current / currentWidth) * 100;
        }
      } else if (sideCheck > 0) {
        if (sideCheck < threshold) {
          currentSideRef.current = 1;
          currentPos.current = (differenceXRef.current / currentWidth) * 100;
          nextPos.current =
            ((-currentWidth + differenceXRef.current) / currentWidth) * 100;
        } else if (sideCheck > threshold) {
          currentSideRef.current = -1;
          currentPos.current =
            ((-currentWidth + differenceXRef.current) / currentWidth) * 100;
          nextPos.current = (differenceXRef.current / currentWidth) * 100;
        }
      }
      //Если картинки идеально встали на пороге
      if (differenceXRef.current === threshold) {
        if (sideCheck > 0) {
          currentSideRef.current = -1;
          currentPos.current = -50;
          nextPos.current = 50;
        } else if (sideCheck < 0) {
          currentSideRef.current = 1;
          currentPos.current = 50;
          nextPos.current = -50;
        }
      }
      //Сброс разницы и стартовой точки после преодоления полной ширины экрана
      if (differenceXRef.current >= currentWidth) {
        differenceXRef.current = 0;
        startX.current = currentX.current;
      } else {
        setRerenderForSwiper(differenceXRef.current); //Для ререндера(НУЖНО!)
      }
    }
  }
  return {
    setCurrentWidth,
    setIntervalFunction,
    handleWidth,
    intervalRef,
    buttonSlideFunction,
    currentIndexRef,
    imgArr,
    isFirstRender,
    isSwipe,
    swipeANIM,
    currentWidth,
    currentSideRef,
    currentPos,
    nextPos,
    startSwipe,
    endSwipe,
    swipeFunction,
  };
}
