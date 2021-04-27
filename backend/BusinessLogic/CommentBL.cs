using DataAccess;
using ETL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class CommentBL
    {
        CommentsRepository _commentsRepository;
        public CommentBL(CommentsRepository commentsRepository)
        {
            _commentsRepository = commentsRepository;
        }
        public Comment Add(Comment comment)
        {
            return _commentsRepository.Add(comment);
        }
        public bool Delete(int commentId)
        {
            return _commentsRepository.Delete(commentId);
        }
    }
}
