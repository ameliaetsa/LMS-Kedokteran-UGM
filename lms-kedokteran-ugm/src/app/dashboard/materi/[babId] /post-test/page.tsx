"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useState } from "react";

export default function postTest({
  params,
}: {
  params: { babId: string };
}) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  // Data quiz untuk setiap bab
  const quizData: { [key: string]: { title: string; questions: any[] } } = {
    "1": {
      title: "Post-test Bab 1 - Pengenalan Dasar Memasak",
      questions: [
        {
          question: "Apa yang dimaksud dengan memasak?",
          options: [
            "Hanya menggoreng makanan",
            "Proses mengolah bahan mentah menjadi makanan siap konsumsi",
            "Memotong bahan makanan",
            "Mencuci peralatan dapur"
          ],
          correct: 1
        },
        {
          question: "Peralatan dasar yang paling penting dalam memasak adalah?",
          options: [
            "Microwave",
            "Blender",
            "Pisau dan talenan",
            "Mixer"
          ],
          correct: 2
        }
      ]
    },
    "2": {
      title: "Post-test Bab 2 - Teknik Memasak Dasar",
      questions: [
        {
          question: "Teknik memasak dengan menggunakan air mendidih disebut?",
          options: [
            "Menggoreng",
            "Memanggang", 
            "Merebus",
            "Mengukus"
          ],
          correct: 2
        }
      ]
    },
    "3": {
      title: "Post-test Bab 3 - Resep dan Aplikasi", 
      questions: [
        {
          question: "Bahan utama dalam nasi goreng adalah?",
          options: [
            "Mie",
            "Nasi",
            "Roti",
            "Kentang"
          ],
          correct: 1
        }
      ]
    }
  };

  const quiz = quizData[params.babId];
  
  if (!quiz) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Quiz tidak ditemukan</h1>
          <button
            onClick={() => router.back()}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    setAnswers({ ...answers, [questionIndex]: answerIndex.toString() });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q, index) => {
      if (parseInt(answers[index]) === q.correct) {
        correct++;
      }
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  return (
    <div className="fixed inset-0 bg-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold text-green-600">{quiz.title}</h1>
        <button
          onClick={() => router.back()}
          className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto p-8">
        {!showResults ? (
          <>
            {quiz.questions.map((q, index) => (
              <div key={index} className="mb-8 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  {index + 1}. {q.question}
                </h3>
                <div className="space-y-3">
                  {q.options.map((option: string, optionIndex: number) => (
                    <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={optionIndex}
                        onChange={() => handleAnswerChange(index, optionIndex)}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center">
              <button
                onClick={() => router.back()}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
              >
                ← Kembali
              </button>
              <button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== quiz.questions.length}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Submit Quiz
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Hasil Quiz</h2>
            <div className="text-6xl font-bold mb-4 text-green-600">
              {calculateScore()}%
            </div>
            <p className="text-xl mb-8 text-gray-600">
              Anda menjawab {Object.values(answers).filter((answer, index) => 
                parseInt(answer) === quiz.questions[index].correct
              ).length} dari {quiz.questions.length} soal dengan benar
            </p>
            <button
              onClick={() => router.back()}
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Kembali ke Materi
            </button>
          </div>
        )}
      </div>
    </div>
  );
}