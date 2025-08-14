import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: 'Базовый',
      description: 'Для небольших квартир и домов',
      monthlyPrice: 2500,
      annualPrice: 25000,
      features: [
        'Поддерживающая уборка',
        'До 50 м²',
        '1 раз в неделю',
        'Базовые средства',
        'Пылесос и влажная уборка',
        'Уборка кухни и санузла'
      ],
      popular: false
    },
    {
      name: 'Стандарт',
      description: 'Оптимальный выбор для большинства',
      monthlyPrice: 4500,
      annualPrice: 45000,
      features: [
        'Генеральная уборка',
        'До 100 м²',
        '2 раза в месяц',
        'Профессиональные средства',
        'Мытье окон изнутри',
        'Химчистка мягкой мебели',
        'Уборка балкона',
        'Приоритетная поддержка'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      description: 'Максимальный комфорт и качество',
      monthlyPrice: 7500,
      annualPrice: 75000,
      features: [
        'Комплексная уборка',
        'Без ограничений по площади',
        'Еженедельно',
        'Эко-средства премиум класса',
        'Мытье окон с двух сторон',
        'Химчистка всей мебели',
        'Озонирование помещений',
        'Персональный менеджер',
        'Гарантия 100%'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { name: 'Мытье окон (за окно)', price: 400 },
    { name: 'Химчистка дивана', price: 2500 },
    { name: 'Уборка балкона', price: 800 },
    { name: 'Мытье холодильника изнутри', price: 600 },
    { name: 'Уборка кладовой', price: 1000 },
    { name: 'Глажка белья (за час)', price: 500 },
    { name: 'Мытье люстры', price: 800 },
    { name: 'Уборка гардеробной', price: 1200 }
  ];

  const commercialPricing = [
    { type: 'Офисы', pricePerSqm: 80, minArea: 50 },
    { type: 'Торговые центры', pricePerSqm: 60, minArea: 200 },
    { type: 'Рестораны', pricePerSqm: 100, minArea: 30 },
    { type: 'Медицинские учреждения', pricePerSqm: 120, minArea: 40 },
    { type: 'Производственные помещения', pricePerSqm: 70, minArea: 100 },
    { type: 'Склады', pricePerSqm: 50, minArea: 500 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Прозрачные цены</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Выберите подходящий тариф или рассчитайте стоимость индивидуально
            </p>
            
            {/* Annual/Monthly Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Label htmlFor="billing-toggle">Ежемесячно</Label>
              <Switch
                id="billing-toggle"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <Label htmlFor="billing-toggle">
                Ежегодно 
                <Badge variant="secondary" className="ml-2">-17%</Badge>
              </Label>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-primary">
                      {isAnnual ? plan.annualPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}₽
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {isAnnual ? 'в год' : 'в месяц'}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Дополнительные услуги</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span>{service.name}</span>
                  <span className="font-semibold text-primary">{service.price}₽</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Цены для бизнеса</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialPricing.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {item.pricePerSqm}₽/м²
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Минимальная площадь: {item.minArea} м²
                    </p>
                    <Button className="w-full mt-4" variant="outline">
                      Рассчитать стоимость
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Что входит в стоимость?</h3>
                  <p className="text-muted-foreground">
                    В стоимость входят все материалы, оборудование, работа специалистов и гарантия качества.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Можно ли изменить план?</h3>
                  <p className="text-muted-foreground">
                    Да, вы можете изменить план в любое время. При переходе на более дорогой план доплачиваете разницу.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Есть ли скидки?</h3>
                  <p className="text-muted-foreground">
                    Мы предоставляем скидки при годовой оплате, для постоянных клиентов и при заказе нескольких услуг.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите подходящий план или получите индивидуальное предложение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;