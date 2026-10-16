import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';
import { Skills } from '../models/skills/skills.model';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];
  
  // Objeto para almacenar las habilidades agrupadas por categoría
  groupedSkills: { [key: string]: Skills[] } = {};

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe({
      next: (data) => {
        console.log('Skills cargadas de Firebase:', data);
        this.skills = data;
        
        // Agrupamos automáticamente por la propiedad 'category'
        this.groupedSkills = data.reduce((acc, skill: any) => {
          const category = skill.category || 'Otras';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(skill);
          return acc;
        }, {} as { [key: string]: Skills[] });

      },
      error: (err) => {
        console.error('Error al cargar skills:', err);
      }
    });
  }

  // Método auxiliar para obtener la lista de categorías en el HTML
  get categories(): string[] {
    return Object.keys(this.groupedSkills);
  }
}
