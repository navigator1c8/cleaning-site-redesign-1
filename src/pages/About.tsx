import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const team = [
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор',
      experience: '15 лет',
      description: 'Основатель компании с многолетним опытом в сфере клининга'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Технический директор',
      experience: '12 лет',
      description: 'Эксперт по современному клининговому оборудованию'
    },
    {
      name: 'Елена Козлова',
      position: 'Менеджер по качеству',
      experience: '8 лет',
      description: 'Контролирует качество выполнения всех работ'
    }
  ];

  const achievements = [
    { icon: 'Award', title: 'Лучшая клининговая компания 2023', year: '2023' },
    { icon: 'Shield', title: 'Сертификат качества ISO 9001', year: '2022' },
    { icon: 'Star', title: 'Рейтинг 4.9/5 на всех платформах', year: '2024' },
    { icon: 'Users', title: 'Более 5000 довольных клиентов', year: '2024' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании ЧистоПро</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Мы создаем идеальную чистоту с 2010 года, используя современные технологии 
              и экологически безопасные средства
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">14</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">сотрудников</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы стремимся создать мир, где каждое пространство сияет чистотой. 
                Наша цель — не просто убрать, а создать здоровую и комфортную 
                среду для жизни и работы наших клиентов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span>Экологически безопасные средства</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span>Современное профессиональное оборудование</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span>Обученный и сертифицированный персонал</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span>Гарантия качества на все виды работ</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg"
                alt="Команда ЧистоПро"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">
              Профессионалы, которые делают вашу жизнь чище
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.description}</p>
                  <div className="text-sm text-primary">
                    Опыт работы: {member.experience}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши достижения</h2>
            <p className="text-xl text-muted-foreground">
              Признание качества нашей работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name={achievement.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы работать с лучшими?</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам довольных клиентов ЧистоПро
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Icon name="Phone" size={20} className="mr-2" />
            Заказать консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;