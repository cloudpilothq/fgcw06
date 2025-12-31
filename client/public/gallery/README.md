# Gallery Photo Management Guide

## Folder Structure

Photos are organized in the following folders:

```
client/public/gallery/
├── events/              # Reunions, ceremonies, gatherings
├── school-memories/     # Old school photos, campus shots
├── achievements/        # Awards, milestones, success stories
├── community/           # Charity work, outreach programs
└── social/              # Casual meetups, dinners
```

## How to Add Photos

### Step 1: Prepare Your Photos

- Use JPG, PNG, or JPEG format
- Recommended size: 1200x1200px or larger
- Compress images for web (keep under 500KB each)

### Step 2: Place Photos in Category Folders

Copy your photos to the appropriate folder:

- **Events**: `/client/public/gallery/events/`
- **School Memories**: `/client/public/gallery/school-memories/`
- **Achievements**: `/client/public/gallery/achievements/`
- **Community Service**: `/client/public/gallery/community/`
- **Social Gatherings**: `/client/public/gallery/social/`

### Step 3: Update the Gallery Code

Open `client/src/app/gallery/page.tsx` and add your photo to the `galleryData` object:

```typescript
const galleryData = {
  'All Photos': [
    // Add your photo here
    {
      src: '/gallery/events/your-photo-name.jpg',
      alt: 'Description of your photo',
      category: 'Events'
    },
    // ... existing photos
  ],
```

**Example:**

```typescript
{
  src: '/gallery/events/reunion-2025.jpg',
  alt: 'Class of 2006 Reunion 2025',
  category: 'Events'
},
```

### Step 4: Commit and Push

```bash
git add .
git commit -m "Add new gallery photos"
git push origin main
```

## Categories

- **Events** - Reunions, annual dinners, ceremonies
- **School Memories** - Old campus photos, graduation pictures
- **Achievements** - Awards, professional milestones
- **Community Service** - Charity events, outreach programs
- **Social Gatherings** - Casual meetups, social events

## Tips

✅ Use descriptive file names (e.g., `reunion-2024-group-photo.jpg`)
✅ Add meaningful alt text for accessibility
✅ Keep photos under 500KB for fast loading
✅ Use consistent aspect ratios when possible
✅ Test locally before pushing to GitHub

## Photo Naming Convention

Good examples:

- `reunion-2024-group-photo.jpg`
- `graduation-day-2006.jpg`
- `charity-event-march-2024.jpg`

Avoid:

- `IMG_1234.jpg`
- `photo.jpg`
- `untitled.jpg`
