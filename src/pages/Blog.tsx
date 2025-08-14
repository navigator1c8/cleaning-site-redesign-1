import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Все статьи' },
    { value: 'tips', label: 'Советы по уборке' },
    { value: 'equipment', label: 'Оборудование' },
    { value: 'eco', label: 'Эко-уборка' },
    { value: 'business', label: 'Для бизнеса' },
    { value: 'seasonal', label: 'Сезонная уборка' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 секретов идеальной уборки квартиры',
      excerpt: 'Профессиональные советы от экспертов ЧистоПро для поддержания идеальной чистоты в доме.',
      content: 'Полное руководство по эффективной уборке квартиры...',
      category: 'tips',
      author: 'Анна Петрова',
      date: '2024-01-20',
      readTime: '5 мин',
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg',
      tags: ['уборка', 'советы', 'дом'],
      featured: true
    },
    {
      id: 2,
      title: 'Как выбрать профессиональный пылесос',
      excerpt: 'Подробный гид по выбору пылесоса для дома и офиса. Сравнение моделей и характеристик.',
      content: 'При выборе пылесоса важно учитывать множество факторов...',
      category: 'equipment',
      author: 'Михаил Сидоров',
      date: '2024-01-18',
      readTime: '7 мин',
      image: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg',
      tags: ['пылесос', 'оборудование', 'выбор'],
      featured: false
    },
    {
      id: 3,
      title: 'Экологичные средства для уборки: мифы и реальность',
      excerpt: 'Разбираемся, действительно ли эко-средства эффективны и безопасны для здоровья.',
      content: 'Экологичные средства становятся все популярнее...',
      category: 'eco',
      author: 'Елена Козлова',
      date: '2024-01-15',
      readTime: '6 мин',
      image: 'https://images.pexels.com/photos/4107101/pexels-photo-4107101.jpeg',
      tags: ['эко', 'средства', 'здоровье'],
      featured: true
    },
    {
      id: 4,
      title: 'Уборка офиса: стандарты и требования',
      excerpt: 'Что нужно знать о профессиональной уборке офисных помещений и коммерческих объектов.',
      content: 'Офисная уборка имеет свои особенности и требования...',
      category: 'business',
      author: 'Дмитрий Волков',
      date: '2024-01-12',
      readTime: '8 мин',
      image: 'https://images.pexels.com/photos/4107110/pexels-photo-4107110.jpeg',
      tags: ['офис', 'бизнес', 'стандарты'],
      featured: false
    },
    {
      id: 5,
      title: 'Весенняя генеральная уборка: пошаговый план',
      excerpt: 'Подробный план весенней уборки дома с чек-листом и полезными советами.',
      content: 'Весна - идеальное время для генеральной уборки...',
      category: 'seasonal',
      author: 'Ольга Смирнова',
      date: '2024-01-10',
      readTime: '10 мин',
      image: 'https://images.pexels.com/photos/4107104/pexels-photo-4107104.jpeg',
      tags: ['весна', 'генеральная', 'план'],
      featured: false
    },
    {
      id: 6,
      title: 'Как убрать пятна с разных поверхностей',
      excerpt: 'Эффективные способы удаления различных пятен с ковров, мебели и одежды.',
      content: 'Каждый тип пятна требует особого подхода...',
      category: 'tips',
      author: 'Анна Петрова',
      date: '2024-01-08',
      readTime: '4 мин',
      image: 'https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg',
      tags: ['пятна', 'чистка', 'советы'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Блог ЧистоПро</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Полезные советы, лайфхаки и профессиональные секреты уборки
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск статей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {!searchQuery && selectedCategory === 'all' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Рекомендуемые статьи</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="aspect-video bg-gray-200 relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">Рекомендуем</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">
                        {categories.find(c => c.value === post.category)?.label}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="User" size={16} />
                        <span>{post.author}</span>
                        <Icon name="Calendar" size={16} />
                        <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {searchQuery || selectedCategory !== 'all' 
                ? `Найдено статей: ${filteredPosts.length}` 
                : 'Все статьи'
              }
            </h2>
            
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="aspect-video bg-gray-200">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">
                          {categories.find(c => c.value === post.category)?.label}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="User" size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <Icon name="Calendar" size={14} />
                            <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="ArrowRight" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="FileText" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Статьи не найдены</h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить поисковый запрос или выбрать другую категорию
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center p-8">
              <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Подпишитесь на рассылку</h2>
              <p className="text-muted-foreground mb-6">
                Получайте новые статьи и полезные советы по уборке прямо на почту
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  placeholder="Ваш email" 
                  type="email"
                  className="flex-1"
                />
                <Button className="sm:w-auto">
                  <Icon name="Send" size={16} className="mr-2" />
                  Подписаться
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Не более 1 письма в неделю. Отписаться можно в любой момент.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Популярные темы</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['уборка', 'советы', 'дом', 'офис', 'эко', 'оборудование', 'пятна', 'чистка', 'здоровье', 'бизнес'].map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSearchQuery(tag)}
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна профессиональная уборка?</h2>
          <p className="text-xl mb-8 opacity-90">
            Применим все наши знания и опыт для идеальной чистоты в вашем доме
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

export default Blog;