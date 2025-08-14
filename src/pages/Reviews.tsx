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

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    service: '',
    rating: 5,
    comment: ''
  });

  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      service: 'Генеральная уборка',
      rating: 5,
      date: '2024-01-15',
      comment: 'Отличная работа! Квартира стала как новая. Команда работала быстро и качественно. Особенно понравилось, что использовали экологичные средства.',
      verified: true,
      photos: 2
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      service: 'Уборка офиса',
      rating: 5,
      date: '2024-01-12',
      comment: 'Пользуемся услугами уже полгода. Всегда качественно, в срок. Сотрудники вежливые и профессиональные.',
      verified: true,
      photos: 0
    },
    {
      id: 3,
      name: 'Елена Козлова',
      service: 'Уборка после ремонта',
      rating: 5,
      date: '2024-01-10',
      comment: 'Справились с очень сложной уборкой после ремонта. Убрали всю пыль, отмыли все поверхности. Результат превзошел ожидания!',
      verified: true,
      photos: 3
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      service: 'Химчистка мебели',
      rating: 4,
      date: '2024-01-08',
      comment: 'Хорошо почистили диван и кресла. Пятна исчезли. Единственное - немного долго сохли после чистки.',
      verified: true,
      photos: 1
    },
    {
      id: 5,
      name: 'Ольга Смирнова',
      service: 'Мытье окон',
      rating: 5,
      date: '2024-01-05',
      comment: 'Окна блестят! Помыли очень аккуратно, ничего не повредили. Цена адекватная.',
      verified: false,
      photos: 0
    },
    {
      id: 6,
      name: 'Александр Иванов',
      service: 'Регулярная уборка',
      rating: 5,
      date: '2024-01-03',
      comment: 'Заказываем регулярную уборку уже год. Всегда довольны результатом. Приходят вовремя, работают тщательно.',
      verified: true,
      photos: 0
    }
  ];

  const stats = {
    totalReviews: 847,
    averageRating: 4.9,
    ratingDistribution: {
      5: 789,
      4: 45,
      3: 8,
      2: 3,
      1: 2
    }
  };

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={interactive ? 24 : 16}
        className={`${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"} ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={interactive ? () => setNewReview({...newReview, rating: i + 1}) : undefined}
      />
    ));
  };

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => review.service.toLowerCase().includes(filter.toLowerCase()));

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New review:', newReview);
    // Здесь будет логика отправки отзыва
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Отзывы клиентов</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Более 800 довольных клиентов доверяют нам свою чистоту
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stats.totalReviews}</div>
                <div className="text-muted-foreground">отзывов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stats.averageRating}</div>
                <div className="text-muted-foreground">средняя оценка</div>
                <div className="flex justify-center mt-2">
                  {renderStars(Math.floor(stats.averageRating))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">рекомендуют нас</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Distribution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Распределение оценок</h2>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map(rating => {
                const count = stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution];
                const percentage = (count / stats.totalReviews) * 100;
                
                return (
                  <div key={rating} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm">{rating}</span>
                      <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground w-12">
                      {count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="reviews">Читать отзывы</TabsTrigger>
              <TabsTrigger value="write">Написать отзыв</TabsTrigger>
            </TabsList>

            <TabsContent value="reviews">
              {/* Filter */}
              <div className="max-w-md mx-auto mb-8">
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Фильтр по услуге" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все услуги</SelectItem>
                    <SelectItem value="генеральная">Генеральная уборка</SelectItem>
                    <SelectItem value="офис">Уборка офиса</SelectItem>
                    <SelectItem value="ремонт">После ремонта</SelectItem>
                    <SelectItem value="химчистка">Химчистка</SelectItem>
                    <SelectItem value="окна">Мытье окон</SelectItem>
                    <SelectItem value="регулярная">Регулярная уборка</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Reviews List */}
              <div className="max-w-4xl mx-auto space-y-6">
                {filteredReviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <CardTitle className="text-lg">{review.name}</CardTitle>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <Icon name="CheckCircle" size={12} className="mr-1" />
                                Проверен
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{review.service}</span>
                            <span>{new Date(review.date).toLocaleDateString('ru-RU')}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex mb-1">
                            {renderStars(review.rating)}
                          </div>
                          {review.photos > 0 && (
                            <div className="text-xs text-muted-foreground">
                              <Icon name="Camera" size={12} className="inline mr-1" />
                              {review.photos} фото
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                      {review.photos > 0 && (
                        <div className="flex space-x-2 mt-4">
                          {Array.from({ length: review.photos }, (_, i) => (
                            <div key={i} className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                              <Icon name="Image" size={20} className="text-gray-400" />
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="write">
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Оставить отзыв</CardTitle>
                    <p className="text-muted-foreground">
                      Поделитесь своим опытом работы с нами
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitReview} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="reviewName">Ваше имя *</Label>
                          <Input
                            id="reviewName"
                            value={newReview.name}
                            onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                            placeholder="Как к вам обращаться?"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="reviewService">Услуга *</Label>
                          <Select onValueChange={(value) => setNewReview({...newReview, service: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Какую услугу заказывали?" />
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
                      </div>

                      <div>
                        <Label>Оценка *</Label>
                        <div className="flex space-x-1 mt-2">
                          {renderStars(newReview.rating, true)}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="reviewComment">Комментарий *</Label>
                        <Textarea
                          id="reviewComment"
                          value={newReview.comment}
                          onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                          placeholder="Расскажите о качестве услуг, работе сотрудников, общих впечатлениях..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Info" size={16} />
                        <span>Отзыв будет опубликован после модерации</span>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Send" size={20} className="mr-2" />
                        Отправить отзыв
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Станьте нашим следующим довольным клиентом!</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к сотням клиентов, которые уже оценили качество наших услуг
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Icon name="Phone" size={20} className="mr-2" />
            Заказать уборку
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;