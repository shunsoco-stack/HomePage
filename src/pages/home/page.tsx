import { useState } from 'react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const prototypeUrl = 'https://example.com';

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('company', formData.company);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d641j1ibdoed7v0v8vc0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(59,130,246,0.15),transparent_45%),radial-gradient(1200px_circle_at_90%_20%,rgba(168,85,247,0.12),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.12) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <header className="flex items-center justify-between py-6 lg:py-8">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm">
                AT
              </div>
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.3em] text-slate-500">AUTOMATION</div>
                <div className="text-lg font-black text-slate-900">TOOLS</div>
              </div>
            </a>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <a href="#services" className="hover:text-slate-900 transition-colors">サービス</a>
              <a href="#prototype" className="hover:text-slate-900 transition-colors">サンプル</a>
              <a href="#cases" className="hover:text-slate-900 transition-colors">実績</a>
              <a href="#process" className="hover:text-slate-900 transition-colors">進め方</a>
              <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-700 rounded-full border border-slate-200 bg-white/70 hover:bg-white transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                無料相談
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-900/20 whitespace-nowrap cursor-pointer"
              >
                問い合わせ
              </a>
            </div>
          </header>

          <div className="grid lg:grid-cols-5 gap-12 items-center py-10 lg:py-20">
            <div className="lg:col-span-3">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600/60 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
                </span>
                最短1週間で導入 / 運用まで伴走
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-tight mb-6">
                業務の「手入力」を<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600">
                  最小化
                </span>
                する<br />
                自動化ツールを作ります
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                PDF→Excel/スプレッドシート、CSV整形、OCR、定型作業の自動化に強い開発チームです。
                現場の運用に合わせた「使える仕組み」を最短距離で届けます。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition-all duration-300 shadow-[0_20px_50px_rgba(15,23,42,0.25)] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
                >
                  相談する
                  <i className="ri-arrow-right-up-line text-lg"></i>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/80 text-blue-700 font-semibold rounded-2xl border border-blue-200 hover:border-blue-400 hover:bg-white transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  無料で見積もり相談
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-600">
                {['PDF抽出', 'CSV整形', 'OCR読取', 'GAS連携', 'レポート自動化'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm"
                  >
                    <i className="ri-check-line text-blue-600"></i>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 relative">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white via-blue-100/60 to-purple-100/70 shadow-2xl">
                  <div className="rounded-[22px] bg-white/80 backdrop-blur border border-white/80 p-6 space-y-4">
                    <div className="bg-white/90 rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300 border border-slate-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <i className="ri-file-pdf-line text-xl text-red-600"></i>
                        </div>
                        <span className="font-semibold text-slate-700">請求書.pdf</span>
                      </div>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex justify-between">
                          <span>請求日:</span>
                          <span className="font-medium">2025-01-15</span>
                        </div>
                        <div className="flex justify-between">
                          <span>取引先:</span>
                          <span className="font-medium">株式会社ABC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>金額:</span>
                          <span className="font-medium">¥150,000</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/90 rounded-2xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300 border border-slate-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <i className="ri-file-excel-2-line text-xl text-green-600"></i>
                        </div>
                        <span className="font-semibold text-slate-700">売上データ.xlsx</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="bg-slate-50 p-2 rounded text-center">
                          <div className="text-slate-500">1月</div>
                          <div className="font-bold text-slate-700">¥2.5M</div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded text-center">
                          <div className="text-slate-500">2月</div>
                          <div className="font-bold text-slate-700">¥3.1M</div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded text-center">
                          <div className="text-slate-500">3月</div>
                          <div className="font-bold text-slate-700">¥2.8M</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/90 rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300 border border-slate-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <i className="ri-table-line text-xl text-blue-600"></i>
                        </div>
                        <span className="font-semibold text-slate-700">スプレッドシート</span>
                      </div>
                      <div className="flex items-center justify-center py-4">
                        <div className="flex items-center gap-2 text-green-600">
                          <i className="ri-check-double-line text-2xl"></i>
                          <span className="font-semibold">自動更新完了</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'スモールスタート', detail: '小さな自動化から素早く改善', icon: 'ri-rocket-line' },
                { title: '再現性の高い運用', detail: '現場フローに合わせた設計', icon: 'ri-shield-check-line' },
                { title: '伴走サポート', detail: '納品後の改善・保守まで対応', icon: 'ri-customer-service-2-line' }
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-white/80 backdrop-blur border border-white/80 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                      <i className={`${item.icon} text-lg`}></i>
                    </div>
                    <div className="text-lg font-bold text-slate-900">{item.title}</div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Why us</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-4">3つの強み</h2>
            <p className="text-lg text-slate-600">小さく始めて、継続的に育てる自動化。</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-settings-3-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">小さな自動化でも対応</h3>
                <p className="text-slate-600 leading-relaxed">
                  大規模なシステムだけでなく、日々の小さな手作業も自動化。コストを抑えながら効率化を実現します。
                </p>
              </div>
            </div>
            
            <div className="group relative rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-emerald-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-equalizer-line text-3xl text-emerald-600"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">現場の運用に合わせて調整可能</h3>
                <p className="text-slate-600 leading-relaxed">
                  実際の業務フローに合わせて柔軟にカスタマイズ。使いやすさを最優先に設計します。
                </p>
              </div>
            </div>
            
            <div className="group relative rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-refresh-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">継続運用を前提に設計</h3>
                <p className="text-slate-600 leading-relaxed">
                  一度作って終わりではなく、長期的に安定して動作する仕組みを構築。保守性も重視します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-3">できること</h2>
            <p className="text-xl text-slate-600 italic">提供する自動化サービス</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              {['Excel/スプレッドシート', 'CSV', 'PDF', 'OCR', 'GAS連携'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                  <i className="ri-sparkling-line text-blue-600"></i>
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-slate-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-rose-500 to-orange-400"></div>
              <div className="bg-rose-50 p-12 flex items-center justify-center group-hover:bg-rose-100 transition-colors duration-300">
                <div className="w-20 h-20 flex items-center justify-center">
                  <i className="ri-file-text-line text-5xl text-rose-600"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">PDF項目抽出→CSV/スプレッドシート出力</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  請求書や帳票から必要な項目を自動抽出し、Excel・スプレッドシートに出力します。
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-slate-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400"></div>
              <div className="bg-green-50 p-12 flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                <div className="w-20 h-20 flex items-center justify-center">
                  <i className="ri-file-chart-line text-5xl text-green-600"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">CSVの整形・集計・レポート自動化</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  CSV取り込みから整形、集計、月次レポート作成まで一連の流れを自動化します。
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-slate-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 via-blue-400 to-purple-400"></div>
              <div className="bg-slate-100 p-12 flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                <div className="w-20 h-20 flex items-center justify-center">
                  <i className="ri-scan-line text-5xl text-slate-600"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">OCRを使った画像/スキャンPDF読み取り</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  画像化されたPDFやスキャン文書から文字を読み取り、データ化します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Section */}
      <section id="prototype" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Prototype</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-4">
                実際に触れる<br />サンプル・プロトタイプ
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                これまで制作したツールの一部を、サンプルとして体験できます。
                UIや自動化の流れを確認しながら、導入イメージを具体化できます。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-900 text-white font-semibold shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all duration-300"
                >
                  サンプルを見る
                  <i className="ri-external-link-line"></i>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:text-slate-900 transition-all duration-300"
                >
                  URLの相談をする
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>
              <div className="mt-6 text-sm text-slate-500">
                ※ URLは差し替え可能です。公開範囲に応じたアクセス設定も相談できます。
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
              <div className="relative rounded-3xl border border-slate-100 bg-slate-900 p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
                  <span>LIVE PREVIEW</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Online
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-xs text-slate-300 mb-2">ワークフロー</div>
                    <div className="flex items-center justify-between text-sm">
                      <span>PDF取込</span>
                      <i className="ri-arrow-right-line"></i>
                      <span>CSV整形</span>
                      <i className="ri-arrow-right-line"></i>
                      <span>シート反映</span>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-xs text-slate-300 mb-2">進行状況</div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 w-4/5"></div>
                    </div>
                    <div className="text-xs text-slate-400 mt-2">80% 完了 / 12秒</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-xs text-slate-300 mb-2">出力</div>
                    <div className="flex items-center gap-2 text-sm">
                      <i className="ri-file-excel-2-line text-emerald-300"></i>
                      見積_集計_2025.xlsx
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Case Studies</span>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">実績</h2>
            <p className="text-lg text-slate-600">実際の自動化事例をご紹介します</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 hover:shadow-2xl transition-all duration-300 p-8">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="ri-star-fill text-amber-400 text-lg"></i>
                ))}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">事例1：請求書PDF→Excel自動転記</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                請求日・取引先・金額などを抽出し、CSV出力。月次作業を大幅に短縮し、入力ミスもゼロに。
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-building-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">製造業</div>
                  <div className="text-sm text-slate-500">月間200件処理</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 hover:shadow-2xl transition-all duration-300 p-8">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="ri-star-fill text-amber-400 text-lg"></i>
                ))}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">事例2：売上CSVの自動集計レポート</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                CSV取り込み〜整形〜月次レポート作成を自動化。経営判断に必要なデータを即座に可視化。
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-store-line text-xl text-green-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">小売業</div>
                  <div className="text-sm text-slate-500">5店舗統合管理</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 hover:shadow-2xl transition-all duration-300 p-8">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="ri-star-fill text-amber-400 text-lg"></i>
                ))}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">事例3：スキャンPDFのOCR抽出</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                画像PDFから数値を読み取り、スプレッドシートへ出力。紙文書のデジタル化を実現。
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-hospital-line text-xl text-purple-600"></i>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">医療事務</div>
                  <div className="text-sm text-slate-500">月間500枚処理</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6 block">Process</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              ご相談から納品まで<br />
              シンプルな5ステップで<br />
              スムーズに進めます
            </h2>
          </div>
          
          <div className="relative mt-16">
            <div className="hidden md:block absolute left-6 right-6 top-8 h-px bg-slate-700/70"></div>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 relative">
                <div className="text-xs font-semibold text-slate-400 mb-3">STEP 01</div>
                <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-chat-3-line text-2xl text-white"></i>
                </div>
                <div className="text-lg font-semibold text-white">相談</div>
                <p className="text-sm text-slate-400 mt-2">課題・目的を整理</p>
              </div>
              
              <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 relative">
                <div className="text-xs font-semibold text-slate-400 mb-3">STEP 02</div>
                <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-checkbox-multiple-line text-2xl text-white"></i>
                </div>
                <div className="text-lg font-semibold text-white">仕様確認</div>
                <p className="text-sm text-slate-400 mt-2">業務フローを可視化</p>
              </div>
              
              <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 relative">
                <div className="text-xs font-semibold text-slate-400 mb-3">STEP 03</div>
                <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-file-list-3-line text-2xl text-white"></i>
                </div>
                <div className="text-lg font-semibold text-white">初稿</div>
                <p className="text-sm text-slate-400 mt-2">動く形で試作</p>
              </div>
              
              <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 relative">
                <div className="text-xs font-semibold text-slate-400 mb-3">STEP 04</div>
                <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-tools-line text-2xl text-white"></i>
                </div>
                <div className="text-lg font-semibold text-white">調整</div>
                <p className="text-sm text-slate-400 mt-2">実運用に合わせて最適化</p>
              </div>
              
              <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 relative">
                <div className="text-xs font-semibold text-slate-400 mb-3">STEP 05</div>
                <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-check-line text-2xl text-white"></i>
                </div>
                <div className="text-lg font-semibold text-white">納品</div>
                <p className="text-sm text-slate-400 mt-2">運用開始・サポート</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">よくある質問</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: 'サンプルPDFがなくても相談できますか？',
                a: '可能です。まずは雛形で対応し、実データで調整します。お気軽にご相談ください。'
              },
              {
                q: 'Googleスプレッドシートに直接反映できますか？',
                a: '可能です。Google Apps Script（GAS）などを使用して、自動更新の仕組みを構築します。'
              },
              {
                q: '料金はどのくらいかかりますか？',
                a: '案件の規模や複雑さによって異なります。無料相談で詳細をお伺いし、お見積もりを提示いたします。'
              },
              {
                q: '納期はどのくらいですか？',
                a: 'シンプルな自動化であれば1〜2週間、複雑な案件は1ヶ月程度が目安です。お急ぎの場合はご相談ください。'
              },
              {
                q: 'どんな業種に対応していますか？',
                a: '製造業、小売業、医療事務、不動産など幅広い業種に対応しています。業種を問わず、定型作業の自動化をサポートします。'
              },
              {
                q: '納品後のサポートはありますか？',
                a: 'はい。納品後も運用サポートや機能追加に対応いたします。継続的な改善もお任せください。'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start gap-4 text-left cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-2">
                        <span className="font-bold text-blue-600">A: </span>
                        <span className="text-slate-600 leading-relaxed">{faq.a}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <i className={`ri-arrow-down-s-line text-2xl text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}></i>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_85%_20%,rgba(59,130,246,0.12),transparent_40%)]"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">お問い合わせ</h2>
            <p className="text-lg text-slate-600">まずは無料相談から。お気軽にお問い合わせください。</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="山田太郎"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="example@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  会社名・屋号
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="株式会社〇〇"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="自動化したい業務内容や、ご相談内容をお書きください（500文字以内）"
                ></textarea>
                <div className="text-right text-sm text-slate-500 mt-1">
                  {formData.message.length}/500
                </div>
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  送信が完了しました。ご連絡ありがとうございます。
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  送信に失敗しました。もう一度お試しください。
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white font-semibold py-4 rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-bold mb-4 pb-2 border-b border-white/30 inline-block">サービス</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-slate-400 hover:text-white transition-colors cursor-pointer">PDF抽出</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition-colors cursor-pointer">CSV整形</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition-colors cursor-pointer">OCR読取</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white transition-colors cursor-pointer">レポート自動化</a></li>
                <li><a href="#prototype" className="text-slate-400 hover:text-white transition-colors cursor-pointer">サンプル</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 pb-2 border-b border-white/30 inline-block">実績</h4>
              <ul className="space-y-3">
                <li><a href="#cases" className="text-slate-400 hover:text-white transition-colors cursor-pointer">製造業</a></li>
                <li><a href="#cases" className="text-slate-400 hover:text-white transition-colors cursor-pointer">小売業</a></li>
                <li><a href="#cases" className="text-slate-400 hover:text-white transition-colors cursor-pointer">医療事務</a></li>
                <li><a href="#cases" className="text-slate-400 hover:text-white transition-colors cursor-pointer">その他業種</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 pb-2 border-b border-white/30 inline-block">会社情報</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors cursor-pointer">私たちについて</a></li>
                <li><a href="#process" className="text-slate-400 hover:text-white transition-colors cursor-pointer">進め方</a></li>
                <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors cursor-pointer">よくある質問</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 pb-2 border-b border-white/30 inline-block">お問い合わせ</h4>
              <ul className="space-y-3">
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors cursor-pointer">相談する</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors cursor-pointer">見積もり依頼</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div>
                <div className="text-5xl lg:text-6xl font-black mb-2">
                  AUTOMATION<br />TOOLS
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-1 bg-blue-600"></div>
                  <span className="text-sm text-slate-400">業務効率化支援</span>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="text-xs text-slate-400 mb-4">© 2025 All rights reserved</div>
                <div className="flex items-center gap-4 justify-center lg:justify-end">
                  <a href="mailto:contact@example.com" className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-mail-line text-xl"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-twitter-x-line text-xl"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-linkedin-line text-xl"></i>
                  </a>
                </div>
                <div className="mt-4">
                  <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
                    Powered by Readdy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
