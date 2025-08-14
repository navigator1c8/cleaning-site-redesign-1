import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('residential');

  const residentialServices = [
    {
      title: 'Генеральная уборка квартиры',
      price: 'от 3500₽',
      duration: '4-6 часов',
      description: 'Полная глубокая уборка всех помещений квартиры',
      features: ['Мытье всех поверхностей', 'Уборка санузлов', 'Мытье окон изнутри', 'Уборка кухни'],
      popular: true
    },
    {
      title: 'Поддерживающая уборка',
      price: 'от 2000₽',
      duration: '2-3 часа',
      description: 'Регулярная уборка для поддержания чистоты',
      features: ['Пылесос и влажная уборка', 'Уборка кухни', 'Санузлы', 'Вынос мусора']
    },
    {
      title: 'Уборка после ремонта',
      price: 'от 5000₽',
      duration: '6-8 часов',
      description: 'Специализированная уборка после строительных работ',
      features: ['Удаление строительной пыли', 'Мытье всех поверхностей', 'Уборка мусора', 'Полировка']
    },
    {
      title: 'Мытье окон',
      price: 'от 400₽/окно',
      duration: '30 мин/окно',
      description: 'Профессиональное мытье окон с двух сторон',
      features: ['Мытье стекол', 'Очистка рам', 'Подоконники', 'Москитные сетки']
    }
  ];

  const commercialServices = [
    {
      title: 'Уборка офисов',
      price: 'от 80₽/м²',
      duration: 'по договору',
      description: 'Комплексная уборка офисных помещений',
      features: ['Рабочие места', 'Переговорные', 'Кухни', 'Санузлы'],
      popular: true
    },
    {
      title: 'Уборка торговых центров',
      price: 'от 60₽/м²',
      duration: 'по договору',
      description: 'Уборка больших торговых площадей',
      features: ['Торговые залы', 'Примерочные', 'Склады', 'Общественные зоны']
    },
    {
      title: 'Уборка медицинских учреждений',
      price: 'от 120₽/м²',
      duration: 'по договору',
      description: 'Специализированная уборка с дезинфекцией',
      features: ['Дезинфекция', 'Стерилизация', 'Специальные средства', 'Сертификация']
    },
    {
      title: 'Уборка ресторанов',
      price: 'от 100₽/м²',
      duration: 'по договору',
      description: 'Уборка кухонь и залов ресторанов',
      features: ['Кухонное оборудование', 'Залы', 'Санузлы', 'Жироудаление']
    }
  ];

  const specialServices = [
    {
      title: 'Химчистка мебели',
      price: 'от 2500₽',
      duration: '2-4 часа',
      description: 'Глубокая чистка мягкой мебели',
      features: ['Диваны', 'Кресла', 'Матрасы', 'Ковры']
    },
    {
      title: 'Уборка после пожара',
      price: 'от 8000₽',
      duration: '1-2 дня',
      description: 'Восстановительная уборка после пожара',
      features: ['Удаление копоти', 'Устранение запаха', 'Дезинфекция', 'Восстановление']
    },
    {
      title: 'Уборка после затопления',
      price: 'от 6000₽',
      duration: '1-2 дня',
      description: 'Устранение последствий затопления',
      features: ['Откачка воды', 'Сушка', 'Дезинфекция', 'Восстановление']
    },
    {
      title: 'Озонирование помещений',
      price: 'от 1500₽',
      duration: '1-2 часа',
      description: 'Дезинфекция и устранение запахов озоном',
      features: ['Дезинфекция', 'Устранение запахов', 'Очистка воздуха', 'Безопасность']
    }
  ];

  const getCurrentServices = () => {
    switch (selectedCategory) {
      case 'residential': return residentialServices;
      case 'commercial': return commercialServices;
      case 'special': return specialServices;
      default: return residentialServices;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Полный спектр клининговых услуг для дома, офиса и специальных объектов
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="residential">Для дома</TabsTrigger>
              <TabsTrigger value="commercial">Для бизнеса</TabsTrigger>
              <TabsTrigger value="special">Специальные</TabsTrigger>
            </TabsList>

            <TabsContent value="residential">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {residentialServices.map((service, index) => (
                  <Card key={index} className="relative hover:shadow-xl transition-all duration-300">
                    {service.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-primary">Популярно</Badge>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{service.price}</div>
                          <div className="text-sm text-muted-foreground">{service.duration}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Icon name="Check" size={16} className="text-primary" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Icon name="Plus" size={16} className="mr-2" />
                          Заказать
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="Calculator" size={16} className="mr-2" />
                          Рассчитать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {commercialServices.map((service, index) => (
                  <Card key={index} className="relative hover:shadow-xl transition-all duration-300">
                    {service.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-primary">Популярно</Badge>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{service.price}</div>
                          <div className="text-sm text-muted-foreground">{service.duration}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Icon name="Check" size={16} className="text-primary" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Icon name="Plus" size={16} className="mr-2" />
                          Заказать
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="Calculator" size={16} className="mr-2" />
                          Рассчитать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="special">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {specialServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{service.price}</div>
                          <div className="text-sm text-muted-foreground">{service.duration}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Icon name="Check" size={16} className="text-primary" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Icon name="Plus" size={16} className="mr-2" />
                          Заказать
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="Calculator" size={16} className="mr-2" />
                          Рассчитать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наши специалисты помогут выбрать оптимальный пакет услуг
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;