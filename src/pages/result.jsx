import classes from "../style/result.module.css";
import ScoreCard from "../conponents/scoreCard";
import Analysis from "../conponents/analysis";
import { useLocation, useParams } from "react-router-dom";
import useAnswerList from "../costomHook/useAnswerList";
import _ from "lodash";
import ResultContext from "../contexts/ResultContext";

export default function Result() {

    const { id } = useParams();
    const { state } = useLocation();

    const { answerList, error, loading } = useAnswerList(id);

    const { qna } = state;

    let numOfCurrenctAnswer = 0;

    const resultArray = [];

    const qnaArray = [];
    const answerArray = [];



    if (qna && qna.length > 0) {

        qna.forEach((question, index) => {

            qnaArray.push([]);

            question.options.forEach((option) => {

                if (option.checked === true)
                    qnaArray[index].push(1);

                else
                    qnaArray[index].push(0);
            });
        });
    }



    if (answerList && answerList.length > 0) {

        answerList.forEach((question, index) => {

            answerArray.push([]);

            question.options.forEach((option) => {

                if (option.correct === true)
                    answerArray[index].push(1);

                else
                    answerArray[index].push(0);
            });
        });
    }



    if (answerArray.length > 0 && qnaArray.length > 0) {

        answerArray.forEach((array, index1) => {

            resultArray[index1] = [];

            array.forEach((val, index2) => {

                if (val === 1) {

                    if (val === qnaArray[index1][index2])
                        resultArray[index1][index2] = "corrected";

                    else
                        resultArray[index1][index2] = "correct";

                } else {

                    if (val === qnaArray[index1][index2])
                        resultArray[index1][index2] = "neutral";

                    else
                        resultArray[index1][index2] = "wrong";
                }
            });
        });
    }



    if (answerArray.length > 0 && qnaArray.length > 0) {

        answerArray.forEach((array, index1) => {

            if (_.isEqual(array, qnaArray[index1])) {

                numOfCurrenctAnswer++;
            }
        });
    }



    return (
        <>
            {loading && <div>Loading...</div>}

            {error && <div className="error">{error}</div>}

            {
                !loading &&
                !error &&
                qna &&
                answerList &&
                qna.length > 0 &&
                answerList.length > 0 && (

                    <>
                        <ScoreCard
                            Num={numOfCurrenctAnswer * 5}
                            totalNum={answerList.length * 5}
                        />

                        <ResultContext.Provider
                            value={{
                                questionList: answerList,
                                submission: resultArray,
                                correctedAnswer: numOfCurrenctAnswer
                            }}
                        >
                            <Analysis />
                        </ResultContext.Provider>
                    </>
                )
            }
        </>
    );
}