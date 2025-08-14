import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Equipment = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const equipmentCategories = [
    { value: 'all', label: 'Все оборудование' },
    { value: 'vacuum', label: 'Пылесосы' },
    { value: 'washing', label: 'Моющие машины' },
    { value: 'steam', label: 'Пароочистители' },
    { value: 'pressure', label: 'Мойки высокого давления' },
    { value: 'tools', label: 'Инструменты' }
  ];

  const equipment = [
    {
      id: 1,
      name: 'Karcher WD 6 Premium',
      category: 'vacuum',
      type: 'Пылесос для влажной и сухой уборки',
      price: 1500,
      priceType: 'сутки',
      power: '1300 Вт',
      capacity: '30 л',
      features: ['Влажная уборка', 'Сухая уборка', 'Выдув', 'Автоматическое отключение'],
      image: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg',
      available: true,
      popular: true,
      description: 'Профессиональный пылесос для любых задач уборки'
    },
    {
      id: 2,
      name: 'Nilfisk ALTO Attix 30-21 PC',
      category: 'vacuum',
      type: 'Строительный пылесос',
      price: 1800,
      priceType: 'сутки',
      power: '1500 Вт',
      capacity: '30 л',
      features: ['Строительная пыль', 'Жидкости', 'Автоочистка фильтра', 'Розетка для инструмента'],
      image: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg',
      available: true,
      popular: false,
      description: 'Идеален для уборки после ремонта и строительных работ'
    },
    {
      id: 3,
      name: 'Karcher BR 30/4 C',
      category: 'washing',
      type: 'Поломоечная машина',
      price: 2500,
      priceType: 'сутки',
      power: '450 Вт',
      capacity: '4 л / 4 л',
      features: ['Автономная работа', 'Компактность', 'Легкое управление', 'Быстрая сушка'],
      image: 'https://images.pexels.com/photos/4107110/pexels-photo-4107110.jpeg',
      available: true,
      popular: true,
      description: 'Компактная поломоечная машина для небольших площадей'
    },
    {
      id: 4,
      name: 'Karcher SC 5 EasyFix Premium',
      category: 'steam',
      type: 'Пароочиститель',
      price: 1200,
      priceType: 'сутки',
      power: '2200 Вт',
      capacity: '1.5 л',
      features: ['Непрерывная подача пара', 'Быстрый нагрев', 'Множество насадок', 'Дезинфекция'],
      image: 'https://images.pexels.com/photos/4107101/pexels-photo-4107101.jpeg',
      available: false,
      popular: true,
      description: 'Эффективная очистка и дезинфекция паром без химии'
    },
    {
      id: 5,
      name: 'Karcher K 5 Premium Full Control Plus',
      category: 'pressure',
      type: 'Мойка высокого давления',
      price: 1800,
      priceType: 'сутки',
      power: '2100 Вт',
      capacity: '145 бар',
      features: ['Регулировка давления', 'Система охлаждения', 'Катушка для шланга', 'Пенная насадка'],
      image: 'https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg',
      available: true,
      popular: false,
      description: 'Мощная мойка для очистки фасадов и больших поверхностей'
    },
    {
      id: 6,
      name: 'Комплект профессиональных щеток',
      category: 'tools',
      type: 'Набор инструментов',
      price: 500,
      priceType: 'сутки',
      power: '-',
      capacity: '-',
      features: ['Разные размеры', 'Натуральная щетина', 'Эргономичные ручки', 'Долговечность'],
      image: 'https://images.pexels.com/photos/4107104/pexels-photo-4107104.jpeg',
      available: true,
      popular: false,
      description: 'Профессиональные щетки для различных поверхностей'
    },
    {
      id: 7,
      name: 'Karcher FC 5 Cordless Premium',
      category: 'washing',
      type: 'Беспроводная швабра',
      price: 800,
      priceType: 'сутки',
      power: 'Аккумулятор',
      capacity: '400 мл',
      features: ['Беспроводная', 'Самоочистка', 'LED подсветка', 'Легкий вес'],
      image: 'https://images.pexels.com/photos/4107110/pexels-photo-4107110.jpeg',
      available: true,
      popular: true,
      description: 'Удобная беспроводная швабра для ежедневной уборки'
    },
    {
      id: 8,
      name: 'Комплект микрофибры Premium',
      category: 'tools',
      type: 'Салфетки и тряпки',
      price: 300,
      priceType: 'сутки',
      power: '-',
      capacity: '20 шт',
      features: ['Высокое качество', 'Разные размеры', 'Многоразовые', 'Антибактериальные'],
      image: 'https://images.pexels.com/photos/4107104/pexels-photo-4107104.jpeg',
      available: true,
      popular: false,
      description: 'Профессиональные салфетки из микрофибры'
    }
  ];

  const filteredEquipment = equipment.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const sortedEquipment = [...filteredEquipment].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'popular':
        return b.popular ? 1 : -1;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const popularEquipment = equipment.filter(item => item.popular);

  const rentalTerms = [
    {
      icon: 'Clock',
      title: 'Минимальный срок аренды',
      description: '1 сутки (24 часа)'
    },
    {
      icon: 'Truck',
      title: 'Доставка',
      description: 'Бесплатная доставка по Москве'
    },
    {
      icon: 'Shield',
      title: 'Страховка',
      description: 'Все оборудование застраховано'
    },
    {
      icon: 'Wrench',
      title: 'Техническая поддержка',
      description: 'Консультации по использованию'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Аренда оборудования</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональное клининговое оборудование в аренду по доступным ценам
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">единиц техники</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">доступность</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">исправность</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Terms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Условия аренды</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalTerms.map((term, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name={term.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{term.title}</h3>
                  <p className="text-sm text-muted-foreground">{term.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="catalog" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="catalog">Каталог</TabsTrigger>
              <TabsTrigger value="popular">Популярное</TabsTrigger>
            </TabsList>

            <TabsContent value="catalog">
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {equipmentCategories.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">По названию</SelectItem>
                    <SelectItem value="price-low">Сначала дешевые</SelectItem>
                    <SelectItem value="price-high">Сначала дорогие</SelectItem>
                    <SelectItem value="popular">Популярные</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Equipment Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedEquipment.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gray-200 relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {item.popular && (
                        <Badge className="absolute top-4 left-4 bg-primary">Популярное</Badge>
                      )}
                      {!item.available && (
                        <Badge className="absolute top-4 right-4 bg-red-500">Недоступно</Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{item.price}₽</div>
                          <div className="text-sm text-muted-foreground">за {item.priceType}</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                        <div>
                          <span className="font-medium">Мощность:</span>
                          <div className="text-muted-foreground">{item.power}</div>
                        </div>
                        <div>
                          <span className="font-medium">Объем:</span>
                          <div className="text-muted-foreground">{item.capacity}</div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <div className="font-medium text-sm">Особенности:</div>
                        {item.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-primary" />
                            <span className="text-xs">{feature}</span>
                          </div>
                        ))}
                        {item.features.length > 3 && (
                          <div className="text-xs text-muted-foreground">
                            +{item.features.length - 3} еще
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1" 
                          disabled={!item.available}
                        >
                          <Icon name="Calendar" size={16} className="mr-2" />
                          {item.available ? 'Арендовать' : 'Недоступно'}
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="Info" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularEquipment.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gray-200 relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary">Популярное</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{item.price}₽</div>
                          <div className="text-sm text-muted-foreground">за {item.priceType}</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      <Button className="w-full">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Арендовать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Выберите оборудование',
                description: 'Найдите нужную технику в каталоге'
              },
              {
                step: '2',
                title: 'Оформите заказ',
                description: 'Укажите сроки аренды и контакты'
              },
              {
                step: '3',
                title: 'Получите доставку',
                description: 'Мы привезем оборудование в удобное время'
              },
              {
                step: '4',
                title: 'Используйте и возвращайте',
                description: 'После использования мы заберем технику'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация по оборудованию?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наши эксперты помогут выбрать подходящую технику для ваших задач
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;