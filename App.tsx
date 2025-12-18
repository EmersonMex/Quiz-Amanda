import React, { useState, useEffect, useRef } from 'react';
import { QUESTIONS, RESULT_TIERS } from './constants';
import { Option, QuizState, UserAnswers, ResultTier } from './types';
import { generateSalesDiagnosis } from './services/geminiService';
import { 
  ArrowRight, 
  BarChart3, 
  Camera, 
  Users, 
  Target,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [finalScore, setFinalScore] = useState(0);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [resultTier, setResultTier] = useState<ResultTier | null>(null);

  const handleStart = () => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (option: Option) => {
    const newAnswers = { ...answers, [QUESTIONS[currentQuestionIndex].id]: option };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        window.scrollTo(0, 0);
      }, 250);
    } else {
      finishQuiz(newAnswers);
    }
  };

  const finishQuiz = async (finalAnswers: UserAnswers) => {
    setQuizState('analyzing');
    const totalScore = Object.values(finalAnswers).reduce((acc, curr) => acc + curr.points, 0);
    setFinalScore(totalScore);
    const tier = RESULT_TIERS.find(t => totalScore >= t.min && totalScore <= t.max) || RESULT_TIERS[0];
    setResultTier(tier);
    const analysis = await generateSalesDiagnosis(totalScore, finalAnswers);
    setAiAnalysis(analysis);
    setQuizState('result');
  };

  // --- RENDER HELPERS (Tema Claro: Bege & Navy) ---

  const renderIntro = () => (
    <div className="max-w-3xl mx-auto px-6 py-12 text-center space-y-8 animate-fade-in">
      <div className="inline-block p-3 rounded-full bg-brand-navy-deep/5 border border-brand-navy-deep/10 mb-4">
        <Sparkles className="w-8 h-8 text-brand-navy-deep" />
      </div>
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy-deep leading-tight">
        Sua Marca <span className="text-blue-700">Vende</span> ou Só <span className="text-red-600">Cansa</span>?
      </h1>
      <h2 className="text-xl md:text-2xl text-brand-navy-deep/80 font-light">
        O Diagnóstico de 15 Pontos da Conversão
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Sou <strong className="text-brand-navy-deep">Amanda Carter</strong>. Minha missão é tirar você da rodinha do hamster.
        Responda 15 perguntas incisivas para descobrir exatamente onde você está perdendo dinheiro.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto bg-white p-6 rounded-xl border border-brand-beige-200 shadow-lg shadow-brand-beige-200/50">
        <div className="flex items-center gap-3">
          <BarChart3 className="text-brand-navy-deep w-6 h-6" />
          <span className="text-slate-700">Conteúdo Estratégico</span>
        </div>
        <div className="flex items-center gap-3">
          <Users className="text-brand-navy-deep w-6 h-6" />
          <span className="text-slate-700">Gestão de Leads</span>
        </div>
        <div className="flex items-center gap-3">
          <Camera className="text-brand-navy-deep w-6 h-6" />
          <span className="text-slate-700">Posicionamento de Imagem</span>
        </div>
        <div className="flex items-center gap-3">
          <Target className="text-brand-navy-deep w-6 h-6" />
          <span className="text-slate-700">Métricas & Execução</span>
        </div>
      </div>

      <button 
        onClick={handleStart}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-navy-deep font-sans rounded-lg hover:bg-brand-navy-hover w-full md:w-auto shadow-xl hover:shadow-2xl hover:-translate-y-1"
      >
        COMEÇAR DIAGNÓSTICO
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );

  const renderQuiz = () => {
    const question = QUESTIONS[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / QUESTIONS.length) * 100;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="w-full bg-brand-beige-200 rounded-full h-2.5 mb-8">
          <div 
            className="bg-brand-navy-deep h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mb-8">
          <span className="text-brand-navy-deep/60 text-sm font-bold tracking-widest uppercase mb-2 block">
            {question.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-navy-deep mb-6">
            {currentQuestionIndex + 1}. {question.question}
          </h3>
          
          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-5 rounded-xl border border-brand-beige-200 bg-white hover:bg-brand-navy-deep hover:border-brand-navy-deep hover:shadow-lg transition-all duration-200 group flex items-start"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-navy-deep/30 flex items-center justify-center mr-4 group-hover:border-white group-hover:bg-white text-brand-navy-deep font-bold text-sm transition-colors">
                  {option.id}
                </div>
                <span className="text-slate-700 group-hover:text-white text-lg leading-snug">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderAnalyzing = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-t-4 border-brand-navy-deep/20 rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-t-4 border-brand-navy-deep rounded-full animate-spin direction-reverse"></div>
      </div>
      <h2 className="text-3xl font-serif font-bold text-brand-navy-deep mb-4">Calculando...</h2>
      <p className="text-slate-600 text-lg">A Amanda está analisando suas respostas.</p>
    </div>
  );

  const renderResult = () => {
    if (!resultTier) return null;

    return (
      <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-beige-200 shadow-xl relative overflow-hidden mb-12">
          <div className={`absolute top-0 left-0 w-full h-2 ${resultTier.color}`}></div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <span className="text-slate-500 uppercase tracking-widest font-bold text-sm">Sua Pontuação</span>
              <div className="text-7xl font-serif font-bold text-brand-navy-deep my-2">
                {finalScore}<span className="text-2xl text-slate-400 font-sans">/105</span>
              </div>
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide bg-brand-navy-deep text-white`}>
                Diagnóstico Concluído
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className={`text-2xl md:text-3xl font-bold ${resultTier.title.includes('VERMELHO') ? 'text-red-600' : resultTier.title.includes('ATENÇÃO') ? 'text-yellow-600' : 'text-emerald-600'}`}>
                {resultTier.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {resultTier.description}
              </p>
            </div>
          </div>
        </div>

        {aiAnalysis && (
          <div className="mb-12 bg-white rounded-2xl p-8 border border-brand-beige-200 shadow-lg">
             <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-brand-navy-deep w-6 h-6" />
                <h3 className="text-xl font-bold text-brand-navy-deep">Análise da Estrategista</h3>
             </div>
             <div className="prose prose-slate max-w-none">
                {aiAnalysis.split('\n').map((line, i) => (
                  <p key={i} className="mb-2 text-slate-700">{line.replace(/^-\s/, '• ')}</p>
                ))}
             </div>
          </div>
        )}

        <div className="bg-brand-navy-deep text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-bold mb-4">O Próximo Passo</h3>
            <p className="text-xl font-medium mb-8 text-blue-100">
              {resultTier.action}
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://wa.me/5511988465800?text=Ola%20Amanda.%20Quero%20vender%20mais%20me%20ajuda%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-navy-deep px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center justify-center shadow-lg w-full md:w-auto"
              >
                Agendar Consultoria
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-brand-beige-50 text-brand-navy-deep selection:bg-brand-navy-deep selection:text-white">
      <nav className="border-b border-brand-beige-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-brand-navy-deep rounded-sm flex items-center justify-center text-white font-serif font-bold shadow-lg">
               A
             </div>
             <span className="font-serif font-bold tracking-tight text-brand-navy-deep">AMANDA CARTER</span>
          </div>
          <div className="text-xs font-medium text-slate-500 uppercase tracking-widest hidden md:block">
            Estratégia & Conversão
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-8">
        {quizState === 'intro' && renderIntro()}
        {quizState === 'quiz' && renderQuiz()}
        {quizState === 'analyzing' && renderAnalyzing()}
        {quizState === 'result' && renderResult()}
      </main>

      <footer className="border-t border-brand-beige-200 mt-12 py-8 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Amanda Carter Estratégia. Todos os direitos reservados.</p>
        <p className="mt-2 text-slate-300">Conversão paga, marketing bonito não paga boleto.</p>
      </footer>
    </div>
  );
};

export default App; 