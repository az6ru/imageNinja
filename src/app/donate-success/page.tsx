import Head from 'next/head'
import Link from 'next/link'

export default function DonateSuccessPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Спасибо за поддержку! | ImageNinja</title>
      </Head>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-5xl mb-4">🙏</div>
        <h1 className="text-2xl font-bold mb-2 text-green-700">Спасибо за поддержку!</h1>
        <p className="text-slate-700 mb-4">Ваше пожертвование помогает развитию сервиса и делает его лучше для всех пользователей.</p>
        <Link href="/" className="inline-block mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium transition-colors">Вернуться на главную</Link>
      </div>
    </div>
  )
} 