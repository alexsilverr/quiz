import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import axios from "axios";
import InputRange from "@/componentes/InputRange";
import PreguntasQuestion from "@/componentes/PreguntasQuestion";
import Link from "next/link";

export default function Question() {
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const [showNextButton, setShowNextButton] = useState(false);
  const [score, setScore] = useState(0);

  const router = useRouter();
  const num = router.query.id;

  const handleNextClick = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetTimer();
      setSelectedOption(null);
      setShowNextButton(false);
      setIsAnswered(false);
    } else {
      // Llegaste al final de las preguntas, muestra el puntaje final
      alert(`Puntuación final: ${score} de 4`);
      router.push("./");
    }
  };

  const resetTimer = () => {
    setTimeLeft(30);
  };
  const shuffleOptions = (options) => {
    const shuffledOptions = [...options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [
        shuffledOptions[j],
        shuffledOptions[i],
      ];
    }
    return shuffledOptions;
  };

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true); // Marcar la pregunta como respondida
      setShowNextButton(true);
      setIsAnswered(true);

      if (option === data[currentQuestionIndex].option1) {
        setCorrectAnswer(option);
        setScore(score + 1);
      } else {
        // El usuario eligió una opción incorrecta, establece el estado correctAnswer en la opción correcta
        setCorrectAnswer(data[currentQuestionIndex].option1);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://quiz-7.com/questions/${num}.json`
        );
        const questions = response.data;

        setData(questions);
        setCorrectAnswer(questions[currentQuestionIndex].option1);
        const shuffledOptions = shuffleOptions([
          questions[currentQuestionIndex].option1,
          questions[currentQuestionIndex].option2,
          questions[currentQuestionIndex].option3,
          questions[currentQuestionIndex].option4,
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [num, currentQuestionIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        // El tiempo se ha agotado, muestra la respuesta correcta
        setCorrectAnswer(data[currentQuestionIndex].option1);
        alert("El tiempo se ha agotado, pasamos a la siguiente ");
        handleNextClick();
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, data, currentQuestionIndex]);

  return (
    <div className={styles.box_questions}>
      <div>
        <div className={styles.box_time_pregunta}>
          <div className={styles.box_rango_button}>
            <div>
              <Link href="./">
                <button className={styles.box_x}>X</button>
              </Link>
            </div>

            <InputRange num={currentQuestionIndex + 1} total={data.length} />
          </div>
          <div className={styles.box_time}>
            <CircularProgressbar
              className=""
              value={timeLeft}
              text={timeLeft}
              maxValue={30}
              counterClockwise={true}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#27e6ff",
                trailColor: "white",
                textSize: "20px",
              })}
            />
          </div>
          {data.length > 0 && (
            <>
              <PreguntasQuestion
                pregunta={data[currentQuestionIndex].question}
              />
            </>
          )}
        </div>
      </div>
      <div>
        <div className={styles.box_options}>
          {data.length > 0 && (
            <>
              <button
                onClick={(e) =>
                  handleOptionClick(data[currentQuestionIndex].option1)
                }
                className={
                  selectedOption === data[currentQuestionIndex].option1
                    ? selectedOption === data[currentQuestionIndex].option1
                      ? `${styles.correct}`
                      : `${styles.incorrect}`
                    : styles.option
                }
              >
                {data[currentQuestionIndex].option1}
              </button>
              <button
                onClick={() =>
                  handleOptionClick(data[currentQuestionIndex].option2)
                }
                className={
                  selectedOption === data[currentQuestionIndex].option2
                    ? selectedOption === data[currentQuestionIndex].option1
                      ? `${styles.correct}`
                      : `${styles.incorrect}`
                    : styles.option
                }
              >
                {data[currentQuestionIndex].option2}
              </button>
              <button
                onClick={() =>
                  handleOptionClick(data[currentQuestionIndex].option3)
                }
                className={
                  selectedOption === data[currentQuestionIndex].option3
                    ? selectedOption === data[currentQuestionIndex].option1
                      ? `${styles.correct}`
                      : `${styles.incorrect}`
                    : styles.option
                }
              >
                {data[currentQuestionIndex].option3}
              </button>
              <button
                onClick={() =>
                  handleOptionClick(data[currentQuestionIndex].option4)
                }
                className={
                  selectedOption === data[currentQuestionIndex].option4
                    ? selectedOption === data[currentQuestionIndex].option1
                      ? `${styles.correct}`
                      : `${styles.incorrect}`
                    : styles.option
                }
              >
                {data[currentQuestionIndex].option4}
              </button>
              {showNextButton && (
                <button className={styles.box_button} onClick={handleNextClick}>
                  NEXT
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
