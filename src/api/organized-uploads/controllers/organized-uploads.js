'use strict';

module.exports = {
  async getOrganizedUploads(ctx) {
    try {
      const files = await strapi.plugins.upload.services.upload.findMany({
        populate: '*'
      });

      const organizedFiles = {};

      files.forEach(file => {
        let origin = 'Unorganized';
        let projectInfo = { name: 'Unknown', id: 'N/A' };

        if (file.related && file.related.length > 0) {
          const rel = file.related[0];
          const type = (rel.__type || rel.__contentType || rel.contentType || '').toLowerCase();

          // Determine origin based on content type
          if (type.includes('rfi')) {
            origin = 'RFIs';
            projectInfo = {
              name: rel.project?.name || rel.project_name || rel.title || 'Unknown Project',
              id: rel.project?.id || rel.project_id || rel.rfi_number || rel.id || 'N/A'
            };
          } else if (type.includes('task')) {
            origin = 'Tasks';
            projectInfo = {
              name: rel.project?.name || rel.project_name || rel.title || rel.work_desc || 'Unknown Project',
              id: rel.project?.id || rel.project_id || rel.id || 'N/A'
            };
          } else if (type.includes('daily')) {
            origin = 'Daily Reports';
            projectInfo = {
              name: rel.project?.name || rel.project_name || rel.title || 'Unknown Project',
              id: rel.project?.id || rel.project_id || rel.id || 'N/A'
            };
          } else if (type.includes('report')) {
            origin = 'Reports';
            projectInfo = {
              name: rel.project?.name || rel.project_name || rel.title || 'Unknown Project',
              id: rel.project?.id || rel.project_id || rel.id || 'N/A'
            };
          } else {
            origin = 'Others';
          }
        }

        if (!organizedFiles[origin]) {
          organizedFiles[origin] = [];
        }

        organizedFiles[origin].push({
          ...file,
          origin,
          projectInfo
        });
      });

      ctx.body = {
        data: organizedFiles,
        meta: {
          totalFiles: files.length,
          categories: Object.keys(organizedFiles).length
        }
      };
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async getFilesByOrigin(ctx) {
    try {
      const { origin } = ctx.params;
      const { search } = ctx.query;

      const files = await strapi.plugins.upload.services.upload.findMany({
        populate: '*'
      });

      let filteredFiles = files.filter(file => {
        if (!file.related || file.related.length === 0) {
          return origin === 'Unorganized';
        }

        const rel = file.related[0];
        const type = (rel.__type || rel.__contentType || rel.contentType || '').toLowerCase();

        let fileOrigin = 'Others';
        if (type.includes('rfi')) fileOrigin = 'RFIs';
        else if (type.includes('task')) fileOrigin = 'Tasks';
        else if (type.includes('daily')) fileOrigin = 'Daily Reports';
        else if (type.includes('report')) fileOrigin = 'Reports';

        return fileOrigin === origin;
      });

      if (search) {
        filteredFiles = filteredFiles.filter(file => 
          file.name.toLowerCase().includes(search.toLowerCase()) ||
          (file.related && file.related[0] && 
           (file.related[0].title || file.related[0].name || '').toLowerCase().includes(search.toLowerCase()))
        );
      }

      const processedFiles = filteredFiles.map(file => {
        let projectInfo = { name: 'Unknown', id: 'N/A' };
        
        if (file.related && file.related.length > 0) {
          const rel = file.related[0];
          projectInfo = {
            name: rel.project?.name || rel.project_name || rel.title || rel.name || rel.work_desc || 'Unknown Project',
            id: rel.project?.id || rel.project_id || rel.rfi_number || rel.id || 'N/A'
          };
        }

        return {
          ...file,
          projectInfo
        };
      });

      ctx.body = {
        data: processedFiles,
        meta: {
          total: processedFiles.length,
          origin
        }
      };
    } catch (error) {
      ctx.throw(500, error);
    }
  }
};