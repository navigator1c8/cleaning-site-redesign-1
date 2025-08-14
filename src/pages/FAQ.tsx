import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      name: 'Общие вопросы',
      icon: 'HelpCircle',
      questions: [
        {
          question: 'Как долго работает ваша компания?',
          answer: 'ЧистоПро работает на рынке клининговых услуг уже более 14 лет. За это время мы обслужили более 5000 клиентов и накопили огромный опыт в сфере профессиональной уборки.',
          popular: true
        },
        {
          question: 'В каких районах Москвы вы работаете?',
          answer: 'Мы работаем по всей Москве и Московской области. У нас есть несколько филиалов, что позволяет быстро добираться к клиентам в любой район города.',
          popular: false
        },
        {
          question: 'Какие гарантии вы предоставляете?',
          answer: 'Мы предоставляем 100% гарантию качества на все виды работ. Если вас что-то не устроит, мы бесплатно переделаем работу или вернем деньги.',
          popular: true
        }
      ]
    },
    {
      name: 'Услуги и цены',
      icon: 'DollarSign',
      questions: [
        {
          question: 'Сколько стоит генеральная уборка квартиры?',
          answer: 'Стоимость генеральной уборки зависит от площади и состояния помещения. В среднем цена составляет от 80 до 120 рублей за квадратный метр. Точную стоимость можно рассчитать с помощью нашего калькулятора или получить при консультации.',
          popular: true
        },
        {
          question: 'Что входит в генеральную уборку?',
          answer: 'Генеральная уборка включает: влажную уборку всех поверхностей, мытье полов, уборку санузлов, кухни, мытье окон изнутри, пылесос мягкой мебели, протирку светильников и многое другое. Полный список услуг предоставляется при заказе.',
          popular: true
        },
        {
          question: 'Есть ли скидки для постоянных клиентов?',
          answer: 'Да, мы предоставляем скидки постоянным клиентам до 15%. Также действуют сезонные акции и скидки при заказе нескольких услуг одновременно.',
          popular: false
        },
        {
          question: 'Можно ли заказать уборку в выходные?',
          answer: 'Конечно! Мы работаем 7 дней в неделю, включая выходные и праздники. За работу в выходные дни доплата не взимается.',
          popular: false
        }
      ]
    },
    {
      name: 'Заказ и оплата',
      icon: 'CreditCard',
      questions: [
        {
          question: 'Как можно оплатить услуги?',
          answer: 'Мы принимаем оплату наличными, банковскими картами, через банковский перевод и электронные платежные системы. Оплата производится после выполнения работ.',
          popular: true
        },
        {
          question: 'За сколько времени нужно заказывать уборку?',
          answer: 'Рекомендуем заказывать уборку за 1-2 дня. Однако мы можем выполнить срочный заказ в день обращения, если у нас есть свободная бригада.',
          popular: true
        },
        {
          question: 'Можно ли изменить время уборки?',
          answer: 'Да, время можно изменить, уведомив нас не менее чем за 4 часа до назначенного времени. Мы постараемся подобрать удобное для вас время.',
          popular: false
        },
        {
          question: 'Что делать, если нужно отменить заказ?',
          answer: 'Заказ можно отменить бесплатно за 12 часов до назначенного времени. При отмене менее чем за 12 часов взимается штраф в размере 50% от стоимости заказа.',
          popular: false
        }
      ]
    },
    {
      name: 'Безопасность и качество',
      icon: 'Shield',
      questions: [
        {
          question: 'Какие средства вы используете?',
          answer: 'Мы используем только профессиональные и экологически безопасные средства известных брендов. Все средства сертифицированы и безопасны для людей и домашних животных.',
          popular: true
        },
        {
          question: 'Застрахованы ли ваши сотрудники?',
          answer: 'Да, все наши сотрудники застрахованы. У нас есть страховка гражданской ответственности, которая покрывает возможный ущерб имуществу клиентов.',
          popular: false
        },
        {
          question: 'Проверяете ли вы своих сотрудников?',
          answer: 'Все сотрудники проходят тщательную проверку, включая проверку документов и рекомендаций. Мы работаем только с проверенными и надежными людьми.',
          popular: true
        },
        {
          question: 'Что делать, если что-то повредили?',
          answer: 'В случае повреждения имущества мы полностью компенсируем ущерб. У нас есть страховка, которая покрывает такие случаи. Сообщите нам о проблеме сразу после обнаружения.',
          popular: false
        }
      ]
    },
    {
      name: 'Специальные услуги',
      icon: 'Star',
      questions: [
        {
          question: 'Делаете ли вы химчистку мебели?',
          answer: 'Да, мы предоставляем услуги химчистки мягкой мебели, ковров и матрасов. Используем профессиональное оборудование и специальные средства для разных типов тканей.',
          popular: true
        },
        {
          question: 'Убираете ли после ремонта?',
          answer: 'Конечно! Уборка после ремонта - одна из наших специализаций. Мы удаляем строительную пыль, отмываем все поверхности, убираем мусор и приводим помещение в идеальное состояние.',
          popular: true
        },
        {
          question: 'Моете ли окна снаружи?',
          answer: 'Да, мы моем окна как изнутри, так и снаружи. Для мытья окон на высоких этажах используем специальное оборудование и соблюдаем все меры безопасности.',
          popular: false
        },
        {
          question: 'Есть ли услуга озонирования?',
          answer: 'Да, мы предоставляем услугу озонирования помещений для дезинфекции и устранения неприятных запахов. Особенно актуально после болезни, для аллергиков или в период эпидемий.',
          popular: false
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.name }))
  );

  const filteredQuestions = searchQuery 
    ? allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allQuestions;

  const popularQuestions = allQuestions.filter(q => q.popular);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Часто задаваемые вопросы</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Найдите ответы на самые популярные вопросы о наших услугах
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      {!searchQuery && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Популярные вопросы</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {popularQuestions.map((item, index) => (
                  <AccordionItem key={index} value={`popular-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary">Популярный</Badge>
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Categories or Search Results */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {searchQuery ? (
              <>
                <h2 className="text-3xl font-bold text-center mb-12">
                  Результаты поиска ({filteredQuestions.length})
                </h2>
                {filteredQuestions.length > 0 ? (
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredQuestions.map((item, index) => (
                      <AccordionItem key={index} value={`search-${index}`} className="border rounded-lg px-6">
                        <AccordionTrigger className="text-left hover:no-underline">
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline">{item.category}</Badge>
                            <span>{item.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pt-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                    <p className="text-muted-foreground">
                      Попробуйте изменить поисковый запрос или обратитесь к нам напрямую
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-center mb-12">Все вопросы по категориям</h2>
                <div className="space-y-12">
                  {faqCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={category.icon} size={24} className="text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold">{category.name}</h3>
                      </div>
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((item, index) => (
                          <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border rounded-lg px-6">
                            <AccordionTrigger className="text-left hover:no-underline">
                              <div className="flex items-center space-x-3">
                                {item.popular && <Badge variant="secondary">Популярный</Badge>}
                                <span>{item.question}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pt-4">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <h2 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
              <p className="text-muted-foreground mb-6">
                Наши специалисты готовы ответить на любые вопросы и помочь с выбором услуг
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить нам
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в чат
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Полезные ссылки</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Icon name="Calculator" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Калькулятор стоимости</h3>
                  <p className="text-sm text-muted-foreground">
                    Рассчитайте примерную стоимость уборки
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Icon name="FileText" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Прайс-лист</h3>
                  <p className="text-sm text-muted-foreground">
                    Подробные цены на все услуги
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Icon name="Star" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Отзывы клиентов</h3>
                  <p className="text-sm text-muted-foreground">
                    Читайте отзывы наших клиентов
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;