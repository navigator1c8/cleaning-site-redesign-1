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

const Careers = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    experience: '',
    message: ''
  });

  const openPositions = [
    {
      id: 1,
      title: 'Специалист по уборке',
      department: 'Клининг',
      type: 'Полная занятость',
      location: 'Москва',
      salary: '40 000 - 60 000 ₽',
      experience: 'Без опыта',
      description: 'Ищем ответственного сотрудника для выполнения клининговых работ в квартирах и офисах.',
      requirements: [
        'Ответственность и пунктуальность',
        'Готовность к физическим нагрузкам',
        'Внимательность к деталям',
        'Коммуникабельность'
      ],
      benefits: [
        'Официальное трудоустройство',
        'Обучение за счет компании',
        'Гибкий график',
        'Премии за качество'
      ],
      urgent: true
    },
    {
      id: 2,
      title: 'Менеджер по продажам',
      department: 'Продажи',
      type: 'Полная занятость',
      location: 'Москва',
      salary: '50 000 - 80 000 ₽',
      experience: '1-3 года',
      description: 'Требуется активный менеджер для работы с клиентами и развития продаж клининговых услуг.',
      requirements: [
        'Опыт продаж от 1 года',
        'Знание CRM систем',
        'Навыки переговоров',
        'Ориентация на результат'
      ],
      benefits: [
        'Высокие комиссионные',
        'Корпоративная мобильная связь',
        'Обучение и развитие',
        'Карьерный рост'
      ],
      urgent: false
    },
    {
      id: 3,
      title: 'Супервайзер клининговых работ',
      department: 'Контроль качества',
      type: 'Полная занятость',
      location: 'Москва',
      salary: '60 000 - 90 000 ₽',
      experience: '2-5 лет',
      description: 'Ищем опытного специалиста для контроля качества выполняемых работ и обучения персонала.',
      requirements: [
        'Опыт в клининге от 2 лет',
        'Лидерские качества',
        'Знание стандартов качества',
        'Водительские права категории B'
      ],
      benefits: [
        'Служебный автомобиль',
        'Медицинская страховка',
        'Оплачиваемый отпуск 28 дней',
        'Бонусы за результат'
      ],
      urgent: false
    },
    {
      id: 4,
      title: 'Оператор call-центра',
      department: 'Клиентский сервис',
      type: 'Полная/частичная занятость',
      location: 'Москва (удаленно возможно)',
      salary: '35 000 - 50 000 ₽',
      experience: 'Без опыта',
      description: 'Требуется вежливый и терпеливый сотрудник для работы с входящими звонками клиентов.',
      requirements: [
        'Грамотная речь',
        'Стрессоустойчивость',
        'Базовые навыки ПК',
        'Желание помогать людям'
      ],
      benefits: [
        'Возможность удаленной работы',
        'Гибкий график',
        'Обучение за счет компании',
        'Дружный коллектив'
      ],
      urgent: true
    }
  ];

  const benefits = [
    {
      icon: 'DollarSign',
      title: 'Достойная зарплата',
      description: 'Конкурентная оплата труда и премии за результат'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Возможность выбора удобного графика работы'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение и развитие',
      description: 'Профессиональное обучение за счет компании'
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Возможности для профессионального роста'
    },
    {
      icon: 'Shield',
      title: 'Социальные гарантии',
      description: 'Официальное трудоустройство и соцпакет'
    },
    {
      icon: 'Users',
      title: 'Дружный коллектив',
      description: 'Поддержка команды и комфортная атмосфера'
    }
  ];

  const companyValues = [
    {
      title: 'Качество',
      description: 'Мы стремимся к совершенству в каждой детали'
    },
    {
      title: 'Надежность',
      description: 'Клиенты и коллеги могут на нас положиться'
    },
    {
      title: 'Развитие',
      description: 'Мы постоянно учимся и совершенствуемся'
    },
    {
      title: 'Уважение',
      description: 'Ценим каждого сотрудника и клиента'
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    // Здесь будет логика отправки заявки
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Работа в ЧистоПро</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к команде профессионалов и развивайтесь вместе с нами
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">сотрудников</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">14</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">довольных сотрудников</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Что мы предлагаем</h2>
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

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="positions" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="positions">Открытые вакансии</TabsTrigger>
              <TabsTrigger value="apply">Подать заявку</TabsTrigger>
            </TabsList>

            <TabsContent value="positions">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Открытые вакансии ({openPositions.length})
                </h2>
                <div className="space-y-6">
                  {openPositions.map((position) => (
                    <Card key={position.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <CardTitle className="text-xl">{position.title}</CardTitle>
                              {position.urgent && (
                                <Badge className="bg-red-500">Срочно</Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                              <Badge variant="outline">{position.department}</Badge>
                              <Badge variant="outline">{position.type}</Badge>
                              <Badge variant="outline">{position.location}</Badge>
                              <Badge variant="outline">{position.experience}</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-primary">{position.salary}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6">{position.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold mb-3">Требования:</h4>
                            <ul className="space-y-2">
                              {position.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <Icon name="Check" size={16} className="text-primary mt-0.5" />
                                  <span className="text-sm">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Мы предлагаем:</h4>
                            <ul className="space-y-2">
                              {position.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <Icon name="Star" size={16} className="text-primary mt-0.5" />
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button className="flex-1">
                            <Icon name="Send" size={16} className="mr-2" />
                            Откликнуться
                          </Button>
                          <Button variant="outline">
                            <Icon name="Share" size={16} className="mr-2" />
                            Поделиться
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="apply">
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Подать заявку</CardTitle>
                    <p className="text-muted-foreground">
                      Заполните форму, и мы свяжемся с вами для обсуждения возможностей
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleApplicationSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Имя и фамилия *</Label>
                          <Input
                            id="name"
                            value={applicationForm.name}
                            onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                            placeholder="Иван Иванов"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={applicationForm.phone}
                            onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                            placeholder="+7 (___) ___-__-__"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={applicationForm.email}
                          onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                          placeholder="ivan@example.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="position">Интересующая позиция</Label>
                        <Select onValueChange={(value) => setApplicationForm({...applicationForm, position: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите позицию" />
                          </SelectTrigger>
                          <SelectContent>
                            {openPositions.map(position => (
                              <SelectItem key={position.id} value={position.title}>
                                {position.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="other">Другая позиция</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="experience">Опыт работы</Label>
                        <Select onValueChange={(value) => setApplicationForm({...applicationForm, experience: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите опыт" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no-experience">Без опыта</SelectItem>
                            <SelectItem value="1-year">До 1 года</SelectItem>
                            <SelectItem value="1-3-years">1-3 года</SelectItem>
                            <SelectItem value="3-5-years">3-5 лет</SelectItem>
                            <SelectItem value="5-plus-years">Более 5 лет</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Сопроводительное письмо</Label>
                        <Textarea
                          id="message"
                          value={applicationForm.message}
                          onChange={(e) => setApplicationForm({...applicationForm, message: e.target.value})}
                          placeholder="Расскажите о себе, своем опыте и мотивации..."
                          rows={5}
                        />
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Upload" size={16} />
                        <span>Резюме можно будет прикрепить после отправки заявки</span>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Send" size={20} className="mr-2" />
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы сотрудников</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Мария Петрова',
                position: 'Специалист по уборке',
                text: 'Работаю в ЧистоПро уже 3 года. Отличная команда, справедливое руководство, стабильная зарплата.',
                rating: 5
              },
              {
                name: 'Алексей Сидоров',
                position: 'Менеджер по продажам',
                text: 'Здесь я получил возможность профессионально расти. Хорошие условия работы и поддержка коллег.',
                rating: 5
              },
              {
                name: 'Елена Козлова',
                position: 'Супервайзер',
                text: 'Ценю в компании честность и открытость. Руководство всегда идет навстречу сотрудникам.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы присоединиться к нашей команде?</h2>
          <p className="text-xl mb-8 opacity-90">
            Начните свою карьеру в ЧистоПро уже сегодня!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Send" size={20} className="mr-2" />
              Подать заявку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;