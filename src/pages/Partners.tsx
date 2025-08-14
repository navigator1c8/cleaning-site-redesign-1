import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Partners = () => {
  const [partnershipForm, setPartnershipForm] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    partnershipType: '',
    description: ''
  });

  const partnershipTypes = [
    {
      title: 'Франшиза',
      description: 'Откройте собственный бизнес под брендом ЧистоПро',
      investment: 'от 500 000 ₽',
      payback: '12-18 месяцев',
      support: 'Полная поддержка',
      benefits: [
        'Узнаваемый бренд',
        'Готовая бизнес-модель',
        'Обучение персонала',
        'Маркетинговая поддержка',
        'Поставка оборудования',
        'Техническая поддержка'
      ],
      requirements: [
        'Начальный капитал от 500 000 ₽',
        'Опыт в бизнесе приветствуется',
        'Готовность следовать стандартам',
        'Наличие помещения или готовность аренды'
      ]
    },
    {
      title: 'Дилерство',
      description: 'Станьте официальным дилером наших услуг в вашем регионе',
      investment: 'от 100 000 ₽',
      payback: '6-12 месяцев',
      support: 'Консультационная поддержка',
      benefits: [
        'Эксклюзивная территория',
        'Готовые маркетинговые материалы',
        'Обучение продажам',
        'Техническая поддержка',
        'Гибкие условия сотрудничества'
      ],
      requirements: [
        'Опыт продаж',
        'Знание местного рынка',
        'Готовность к активным продажам',
        'Соблюдение стандартов качества'
      ]
    },
    {
      title: 'Субподряд',
      description: 'Выполняйте заказы ЧистоПро в качестве субподрядчика',
      investment: 'Минимальные',
      payback: 'Немедленно',
      support: 'Операционная поддержка',
      benefits: [
        'Стабильный поток заказов',
        'Фиксированные расценки',
        'Обучение стандартам',
        'Предоставление клиентов',
        'Быстрые выплаты'
      ],
      requirements: [
        'Опыт в клининге',
        'Собственное оборудование',
        'Команда сотрудников',
        'Соблюдение стандартов качества'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'ООО "Чистый Дом"',
      type: 'Франшиза',
      location: 'Санкт-Петербург',
      since: '2022',
      revenue: '+150%',
      description: 'Успешно развивают бизнес в Северной столице'
    },
    {
      name: 'ИП Сидоров А.В.',
      type: 'Дилер',
      location: 'Екатеринбург',
      since: '2023',
      revenue: '+200%',
      description: 'Активно развивают рынок Урала'
    },
    {
      name: 'ООО "КлинСервис"',
      type: 'Субподрядчик',
      location: 'Москва',
      since: '2021',
      revenue: '+80%',
      description: 'Надежный партнер по коммерческим объектам'
    }
  ];

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Растущий рынок',
      description: 'Рынок клининговых услуг растет на 15% ежегодно'
    },
    {
      icon: 'Award',
      title: 'Проверенная модель',
      description: '14 лет успешной работы и отработанные процессы'
    },
    {
      icon: 'Users',
      title: 'Поддержка команды',
      description: 'Полная поддержка на всех этапах развития бизнеса'
    },
    {
      icon: 'Target',
      title: 'Эксклюзивность',
      description: 'Защищенная территория и отсутствие конкуренции'
    },
    {
      icon: 'BookOpen',
      title: 'Обучение',
      description: 'Комплексное обучение всем аспектам бизнеса'
    },
    {
      icon: 'Headphones',
      title: '24/7 поддержка',
      description: 'Круглосуточная техническая и консультационная поддержка'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Заявка',
      description: 'Заполните форму или свяжитесь с нами'
    },
    {
      number: '2',
      title: 'Встреча',
      description: 'Обсуждаем детали сотрудничества'
    },
    {
      number: '3',
      title: 'Анализ',
      description: 'Анализируем ваш рынок и возможности'
    },
    {
      number: '4',
      title: 'Договор',
      description: 'Подписываем партнерское соглашение'
    },
    {
      number: '5',
      title: 'Запуск',
      description: 'Начинаем совместную работу'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership form submitted:', partnershipForm);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Партнерство с ЧистоПро</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Развивайте прибыльный бизнес в сфере клининга вместе с лидером рынка
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">партнеров</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15%</div>
                <div className="text-muted-foreground">рост рынка в год</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12-18</div>
                <div className="text-muted-foreground">месяцев окупаемость</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества партнерства</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Виды партнерства</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{type.title}</CardTitle>
                  <p className="text-muted-foreground">{type.description}</p>
                  <div className="grid grid-cols-3 gap-2 mt-4 text-sm">
                    <div>
                      <div className="font-medium">Инвестиции</div>
                      <div className="text-primary">{type.investment}</div>
                    </div>
                    <div>
                      <div className="font-medium">Окупаемость</div>
                      <div className="text-primary">{type.payback}</div>
                    </div>
                    <div>
                      <div className="font-medium">Поддержка</div>
                      <div className="text-primary">{type.support}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Преимущества:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Icon name="Check" size={16} className="text-primary mt-0.5" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Требования:</h4>
                      <ul className="space-y-2">
                        {type.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Icon name="ArrowRight" size={16} className="text-muted-foreground mt-0.5" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши партнеры</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">{partner.name}</h3>
                    <Badge variant="outline">{partner.type}</Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={14} />
                      <span>{partner.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} />
                      <span>С {partner.since} года</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={14} />
                      <span className="text-green-600 font-medium">{partner.revenue} рост</span>
                    </div>
                  </div>
                  <p className="text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как стать партнером</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Стать партнером</CardTitle>
                <p className="text-muted-foreground text-center">
                  Заполните форму, и мы свяжемся с вами для обсуждения условий партнерства
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Название компании *</Label>
                      <Input
                        id="companyName"
                        value={partnershipForm.companyName}
                        onChange={(e) => setPartnershipForm({...partnershipForm, companyName: e.target.value})}
                        placeholder="ООО Ваша компания"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactName">Контактное лицо *</Label>
                      <Input
                        id="contactName"
                        value={partnershipForm.contactName}
                        onChange={(e) => setPartnershipForm({...partnershipForm, contactName: e.target.value})}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={partnershipForm.phone}
                        onChange={(e) => setPartnershipForm({...partnershipForm, phone: e.target.value})}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={partnershipForm.email}
                        onChange={(e) => setPartnershipForm({...partnershipForm, email: e.target.value})}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="partnershipType">Тип партнерства *</Label>
                    <Select onValueChange={(value) => setPartnershipForm({...partnershipForm, partnershipType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип партнерства" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="franchise">Франшиза</SelectItem>
                        <SelectItem value="dealer">Дилерство</SelectItem>
                        <SelectItem value="subcontract">Субподряд</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description">Расскажите о себе</Label>
                    <Textarea
                      id="description"
                      value={partnershipForm.description}
                      onChange={(e) => setPartnershipForm({...partnershipForm, description: e.target.value})}
                      placeholder="Опишите ваш опыт, планы, регион работы..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Какие требования к партнерам?',
                answer: 'Основные требования: наличие начального капитала, готовность следовать стандартам компании, желание развивать бизнес. Конкретные требования зависят от типа партнерства.'
              },
              {
                question: 'Какую поддержку вы предоставляете?',
                answer: 'Мы предоставляем полную поддержку: обучение, маркетинговые материалы, техническую поддержку, помощь в поиске клиентов, консультации по развитию бизнеса.'
              },
              {
                question: 'Сколько времени занимает запуск?',
                answer: 'От подписания договора до запуска бизнеса обычно проходит 2-4 недели. Это время необходимо для обучения, подготовки помещения и получения необходимых документов.'
              },
              {
                question: 'Какая прибыльность бизнеса?',
                answer: 'Рентабельность клинингового бизнеса составляет 20-40%. Конкретные показатели зависят от региона, объема работ и эффективности управления.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать прибыльный бизнес?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами сегодня и узнайте все возможности партнерства
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;