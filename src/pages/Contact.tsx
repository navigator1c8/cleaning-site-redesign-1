import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    preferredTime: ''
  });

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Звоните с 8:00 до 22:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@chistopro.ru',
      description: 'Ответим в течение часа'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Москва, ул. Клининговая, 15',
      description: 'Офис открыт с 9:00 до 18:00'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Круглосуточно',
      description: 'Без выходных и праздников'
    }
  ];

  const offices = [
    {
      name: 'Центральный офис',
      address: 'ул. Клининговая, 15',
      phone: '+7 (495) 123-45-67',
      hours: '9:00 - 18:00',
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      name: 'Филиал на Севере',
      address: 'ул. Северная, 28',
      phone: '+7 (495) 123-45-68',
      hours: '9:00 - 18:00',
      coordinates: { lat: 55.8558, lng: 37.6176 }
    },
    {
      name: 'Филиал на Юге',
      address: 'ул. Южная, 42',
      phone: '+7 (495) 123-45-69',
      hours: '9:00 - 18:00',
      coordinates: { lat: 55.6558, lng: 37.6176 }
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Мы всегда готовы ответить на ваши вопросы и помочь с выбором услуг
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name={info.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-lg font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                <p className="text-muted-foreground">
                  Заполните форму, и мы свяжемся с вами в течение 15 минут
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Интересующая услуга</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Генеральная уборка</SelectItem>
                        <SelectItem value="regular">Регулярная уборка</SelectItem>
                        <SelectItem value="after-repair">Уборка после ремонта</SelectItem>
                        <SelectItem value="office">Уборка офиса</SelectItem>
                        <SelectItem value="windows">Мытье окон</SelectItem>
                        <SelectItem value="furniture">Химчистка мебели</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Удобное время для звонка</Label>
                    <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Утром (9:00-12:00)</SelectItem>
                        <SelectItem value="afternoon">Днем (12:00-15:00)</SelectItem>
                        <SelectItem value="evening">Вечером (15:00-18:00)</SelectItem>
                        <SelectItem value="anytime">В любое время</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Расскажите подробнее о ваших потребностях..."
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

            {/* Map and Offices */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="MapPin" size={48} className="text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Интерактивная карта</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Offices List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Наши офисы</h3>
                {offices.map((office, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{office.name}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Icon name="MapPin" size={14} />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" size={14} />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={14} />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Быстрая связь</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="MessageCircle" size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Напишите нам в мессенджер
                  </p>
                  <Button variant="outline" className="w-full">
                    Написать в WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Send" size={32} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Telegram</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Быстрые ответы в Telegram
                  </p>
                  <Button variant="outline" className="w-full">
                    Написать в Telegram
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Phone" size={32} className="text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Обратный звонок</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Мы перезвоним в течение 5 минут
                  </p>
                  <Button variant="outline" className="w-full">
                    Заказать звонок
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна срочная уборка?</h2>
          <p className="text-xl mb-8 opacity-90">
            Звоните прямо сейчас — выезжаем в течение 2 часов!
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Icon name="Phone" size={20} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;