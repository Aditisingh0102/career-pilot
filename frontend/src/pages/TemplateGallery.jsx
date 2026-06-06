import React, { useState, useMemo } from "react";
import { templates } from '../data/templates';
import { Star, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TemplateGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Portfolio");
  const [brokenImages, setBrokenImages] = useState({});
  const navigate = useNavigate();

  const filteredTemplates = useMemo(() => {
    return templates.filter(t => t.category === selectedCategory);
  }, [selectedCategory]);

  const categories = useMemo(() => {
    return [...new Set(templates.map(t => t.category))];
  }, []);

  const handleSelectTemplate = (templateId) => {
    navigate(`/?templateId=${templateId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Portfolio Templates</h1>
        <p className="text-sm text-muted-foreground mb-8">Browse and select from our collection of beautiful portfolio templates.</p>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-white'
                  : 'bg-card border border-border hover:border-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map(template => (
            <button
              type="button"
              key={template.id}
              onClick={() => handleSelectTemplate(template.id)}
              className="group w-full text-left rounded-xl border border-border overflow-hidden transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {/* Template Preview Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                {brokenImages[template.id] ? (
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-xs text-muted-foreground">
                    {template.title}
                  </div>
                ) : (
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => setBrokenImages((prev) => ({ ...prev, [template.id]: true }))}
                  />
                )}
              </div>

              {/* Template Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">{template.title}</h3>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span className="bg-card px-2 py-1 rounded">{template.colorScheme}</span>
                  <span className="bg-card px-2 py-1 rounded">{template.layout}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{template.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{template.rating}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No templates found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
